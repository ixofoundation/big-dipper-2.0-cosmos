import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgTransferEntity } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const TransferEntity: FC<{ message: MsgTransferEntity }> = (props) => {
  const { message } = props;

  return (
    <Typography>
      <AppTrans i18nKey="message_contents:txTransferEntityContent" components={[]} values={{}} />
    </Typography>
  );
};

export default TransferEntity;
