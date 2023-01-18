import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import Desktop from '@/screens/validator_details/components/staking/components/delegations/components/desktop';
import Mobile from '@/screens/validator_details/components/staking/components/delegations/components/mobile';
import useStyles from '@/screens/validator_details/components/staking/components/delegations/styles';
import type { DelegationsType } from '@/screens/validator_details/components/staking/types';
import { FC, useCallback } from 'react';

type DelegationsProps = {
  className?: string;
  delegations: DelegationsType;
  setPage: (page: number) => void;
};

const Delegations: FC<DelegationsProps> = (props) => {
  const { classes } = useStyles();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } = usePagination({});
  const handlePageChangeCallback = useCallback(
    (event: Parameters<typeof handlePageChange>[0], newPage: number) => {
      props.setPage?.(newPage);
      handlePageChange?.(event, newPage);
    },
    [handlePageChange, props]
  );

  const itemsMemo = useShallowMemo(props?.delegations?.data);

  let component = null;

  if (props.delegations.error) {
    component = <pre>{props.delegations.error.message}</pre>;
  } else if (props.delegations.loading && !itemsMemo?.length) {
    component = <Loading />;
  } else if (!itemsMemo?.length) {
    component = <NoData />;
  } else {
    component = (
      <>
        <Desktop items={itemsMemo} className={classes.hiddenUntilLg} />
        <Mobile items={itemsMemo} className={classes.hiddenWhenLg} />
      </>
    );
  }

  let total = props.delegations.count;
  if (total === undefined && props.delegations.data?.length !== undefined) {
    if (props.delegations.data.length === rowsPerPage) {
      total = page * rowsPerPage + props.delegations.data.length + 1;
    } else {
      total = page * rowsPerPage + props.delegations.data.length;
    }
  }

  return (
    <div className={props.className}>
      {component}
      <Pagination
        className={classes.paginate}
        total={total}
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChangeCallback}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </div>
  );
};

export default Delegations;
