import chainCoing from '@/chainConfig';
import useStyles from '@/components/ChainIcon/useStyles';
import Image, { type ImageProps } from 'next/image';
import baseIconLight from 'shared-utils/assets/icons/base-light.svg?url';
import baseLogoLight from 'shared-utils/assets/logos/base-light.svg?url';
import ixoLogoBoth from 'shared-utils/assets/logos/ixo-both.svg?url';
import ixoIconBoth from 'shared-utils/assets/icons/ixo-both.svg?url';

interface IconProps extends Omit<ImageProps, 'id' | 'src'> {
  type: 'icon' | 'logo';
  chainName?: string;
}

const ChainIcon = ({
  className,
  type,
  chainName = chainCoing().chainName,
  ...props
}: IconProps) => {
  const { classes, cx } = useStyles();

  let [iconDark, iconLight] =
    type === 'icon' ? [baseIconLight, baseIconLight] : [baseLogoLight, baseLogoLight];
  switch (chainName) {
    case 'ixo':
      [iconDark, iconLight] =
        type === 'icon' ? [ixoIconBoth, ixoIconBoth] : [ixoLogoBoth, ixoLogoBoth];
      break;
    default:
      throw new Error(`chain ${chainName} not supported`);
  }
  return (
    <span className={cx(className, classes.container)}>
      <Image width={0} height={0} src={iconDark} {...props} className={classes.dark} unoptimized />
      <Image
        width={0}
        height={0}
        src={iconLight}
        {...props}
        className={classes.light}
        unoptimized
      />
    </span>
  );
};

export default ChainIcon;
