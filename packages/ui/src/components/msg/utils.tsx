import * as COMPONENTS from '@/components/msg';
import Tag from '@/components/tag';
import * as MODELS from '@/models';
import type { Log } from '@/models/msg/types';
import isKeyOf from '@/utils/isKeyOf';
import type { TFunction } from '@/hooks/useAppTranslation';
import * as R from 'ramda';
import { ComponentProps, FC } from 'react';

// =====================================
// DO NOT UPDATE IF THIS IS A FORK.
// ONLY COSMOS SDK DEFAULT MESSAGES HERE.
// Please use `customTypeToModel` below for custom message types
// =====================================
const defaultTypeToModel = {
  // ========================
  // staking
  // ========================
  '/cosmos.staking.v1beta1.MsgDelegate': {
    model: MODELS.MsgDelegate,
    content: COMPONENTS.Delegate,
    tagTheme: 'one',
    tagDisplay: 'txDelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
    model: MODELS.MsgRedelegate,
    content: COMPONENTS.Redelegate,
    tagTheme: 'one',
    tagDisplay: 'txRedelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgUndelegate': {
    model: MODELS.MsgUndelegate,
    content: COMPONENTS.Undelegate,
    tagTheme: 'one',
    tagDisplay: 'txUndelegateLabel',
  },
  '/cosmos.staking.v1beta1.MsgCreateValidator': {
    model: MODELS.MsgCreateValidator,
    content: COMPONENTS.CreateValidator,
    tagTheme: 'one',
    tagDisplay: 'txCreateValidatorLabel',
  },
  '/cosmos.staking.v1beta1.MsgEditValidator': {
    model: MODELS.MsgEditValidator,
    content: COMPONENTS.EditValidator,
    tagTheme: 'one',
    tagDisplay: 'txEditValidatorLabel',
  },
  // ========================
  // bank
  // ========================
  '/cosmos.bank.v1beta1.MsgSend': {
    model: MODELS.MsgSend,
    content: COMPONENTS.Send,
    tagTheme: 'two',
    tagDisplay: 'txSendLabel',
  },
  '/cosmos.bank.v1beta1.MsgMultiSend': {
    model: MODELS.MsgMultiSend,
    content: COMPONENTS.Multisend,
    tagTheme: 'two',
    tagDisplay: 'txMultisendLabel',
  },
  // ========================
  // crisis
  // ========================
  '/cosmos.crisis.v1beta1.MsgVerifyInvariant': {
    model: MODELS.MsgVerifyInvariant,
    content: COMPONENTS.VerifyInvariant,
    tagTheme: 'three',
    tagDisplay: 'txVerifyInvariantLabel',
  },
  // ========================
  // slashing
  // ========================
  '/cosmos.slashing.v1beta1.MsgUnjail': {
    model: MODELS.MsgUnjail,
    content: COMPONENTS.Unjail,
    tagTheme: 'five',
    tagDisplay: 'txUnjailLabel',
  },
  // ========================
  // distribution
  // ========================
  '/cosmos.distribution.v1beta1.MsgFundCommunityPool': {
    model: MODELS.MsgFundCommunityPool,
    content: COMPONENTS.Fund,
    tagTheme: 'six',
    tagDisplay: 'txFundLabel',
  },
  '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': {
    model: MODELS.MsgSetWithdrawAddress,
    content: COMPONENTS.SetWithdrawalAddress,
    tagTheme: 'six',
    tagDisplay: 'txsetRewardAddressLabel',
  },
  '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': {
    model: MODELS.MsgWithdrawDelegatorReward,
    content: COMPONENTS.WithdrawReward,
    tagTheme: 'six',
    tagDisplay: 'txWithdrawRewardLabel',
  },
  '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission': {
    model: MODELS.MsgWithdrawValidatorCommission,
    content: COMPONENTS.WithdrawCommission,
    tagTheme: 'six',
    tagDisplay: 'txWithdrawCommissionLabel',
  },
  // ========================
  // governance
  // ========================
  '/cosmos.gov.v1beta1.MsgDeposit': {
    model: MODELS.MsgDeposit,
    content: COMPONENTS.DepositProposal,
    tagTheme: 'seven',
    tagDisplay: 'txDepositLabel',
  },
  '/cosmos.gov.v1beta1.MsgVote': {
    model: MODELS.MsgVote,
    content: COMPONENTS.Vote,
    tagTheme: 'seven',
    tagDisplay: 'txVoteLabel',
  },
  '/cosmos.gov.v1beta1.MsgSubmitProposal': {
    model: MODELS.MsgSubmitProposal,
    content: COMPONENTS.SubmitProposal,
    tagTheme: 'seven',
    tagDisplay: 'txSubmitProposalLabel',
  },
  // ========================
  // ibc client
  // ========================
  '/ibc.core.client.v1.MsgCreateClient': {
    model: MODELS.MsgCreateClient,
    content: COMPONENTS.CreateClient,
    tagTheme: 'nine',
    tagDisplay: 'txCreateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpdateClient': {
    model: MODELS.MsgUpdateClient,
    content: COMPONENTS.UpdateClient,
    tagTheme: 'nine',
    tagDisplay: 'txUpdateClientLabel',
  },
  '/ibc.core.client.v1.MsgUpgradeClient': {
    model: MODELS.MsgUpgradeClient,
    content: COMPONENTS.UpgradeClient,
    tagTheme: 'nine',
    tagDisplay: 'txUpgradeClientLabel',
  },
  '/ibc.core.client.v1.MsgSubmitMisbehaviour': {
    model: MODELS.MsgSubmitMisbehaviour,
    content: COMPONENTS.SubmitMisbehaviour,
    tagTheme: 'nine',
    tagDisplay: 'txSubmitMisbehaviourLabel',
  },
  '/ibc.core.client.v1.Height': {
    model: MODELS.MsgHeight,
    content: COMPONENTS.Height,
    tagTheme: 'nine',
    tagDisplay: 'txHeightLabel',
  },
  // ========================
  // ibc channel
  // ========================
  '/ibc.core.channel.v1.MsgRecvPacket': {
    model: MODELS.MsgReceivePacket,
    content: COMPONENTS.ReceivePacket,
    tagTheme: 'nine',
    tagDisplay: 'txRecvPacketLabel',
  },
  '/ibc.core.channel.v1.Channel': {
    model: MODELS.MsgChannel,
    content: COMPONENTS.Channel,
    tagTheme: 'nine',
    tagDisplay: 'txChannelLabel',
  },
  '/ibc.core.channel.v1.Counterparty': {
    model: MODELS.MsgCounterpartyChannel,
    content: COMPONENTS.CounterpartyChannel,
    tagTheme: 'nine',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.channel.v1.Packet': {
    model: MODELS.MsgPacket,
    content: COMPONENTS.Packet,
    tagTheme: 'nine',
    tagDisplay: 'txPacketLabel',
  },
  '/ibc.core.channel.v1.MsgAcknowledgement': {
    model: MODELS.MsgAcknowledgement,
    content: COMPONENTS.Acknowledgement,
    tagTheme: 'nine',
    tagDisplay: 'txAcknowledgementLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseConfirm': {
    model: MODELS.MsgChannelCloseConfirm,
    content: COMPONENTS.ChannelCloseConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txChannelCloseConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelCloseInit': {
    model: MODELS.MsgChannelCloseInit,
    content: COMPONENTS.ChannelCloseInit,
    tagTheme: 'nine',
    tagDisplay: 'txChannelCloseInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenAck': {
    model: MODELS.MsgChannelOpenAck,
    content: COMPONENTS.ChannelOpenAck,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenAckLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenConfirm': {
    model: MODELS.MsgChannelOpenConfirm,
    content: COMPONENTS.ChannelOpenConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenConfirmLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenInit': {
    model: MODELS.MsgChannelOpenInit,
    content: COMPONENTS.ChannelOpenInit,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenInitLabel',
  },
  '/ibc.core.channel.v1.MsgChannelOpenTry': {
    model: MODELS.MsgChannelOpenTry,
    content: COMPONENTS.ChannelOpenTry,
    tagTheme: 'nine',
    tagDisplay: 'txChannelOpenTryLabel',
  },
  '/ibc.core.channel.v1.MsgTimeout': {
    model: MODELS.MsgTimeout,
    content: COMPONENTS.Timeout,
    tagTheme: 'nine',
    tagDisplay: 'txTimeoutLabel',
  },
  '/ibc.core.channel.v1.MsgTimeoutOnClose': {
    model: MODELS.MsgTimeoutOnClose,
    content: COMPONENTS.TimeoutOnClose,
    tagTheme: 'nine',
    tagDisplay: 'txTimeoutOnCloseLabel',
  },
  // ========================
  // ibc connection
  // ========================
  '/ibc.core.connection.v1.MsgConnectionOpenAck': {
    model: MODELS.MsgConnectionOpenAck,
    content: COMPONENTS.ConnectionOpenAck,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenAckLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenConfirm': {
    model: MODELS.MsgConnectionOpenConfirm,
    content: COMPONENTS.ConnectionOpenConfirm,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenConfirmLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenInit': {
    model: MODELS.MsgConnectionOpenInit,
    content: COMPONENTS.ConnectionOpenInit,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenInitLabel',
  },
  '/ibc.core.connection.v1.MsgConnectionOpenTry': {
    model: MODELS.MsgConnectionOpenTry,
    content: COMPONENTS.ConnectionOpenTry,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionOpenTryLabel',
  },
  '/ibc.core.connection.v1.ConnectionEnd': {
    model: MODELS.MsgConnectionEnd,
    content: COMPONENTS.ConnectionEnd,
    tagTheme: 'nine',
    tagDisplay: 'txConnectionEndLabel',
  },
  '/ibc.core.connection.v1.Counterparty': {
    model: MODELS.MsgCounterpartyConnection,
    content: COMPONENTS.CounterpartyConnection,
    tagTheme: 'nine',
    tagDisplay: 'txCounterpartyLabel',
  },
  '/ibc.core.connection.v1.Version': {
    model: MODELS.MsgVersion,
    content: COMPONENTS.Version,
    tagTheme: 'nine',
    tagDisplay: 'txVersionLabel',
  },
  // ========================
  // ibc transfer
  // ========================
  '/ibc.applications.transfer.v1.MsgTransfer': {
    model: MODELS.MsgTransfer,
    content: COMPONENTS.Transfer,
    tagTheme: 'ten',
    tagDisplay: 'txTransferLabel',
  },
  // ========================
  // authz
  // ========================
  '/cosmos.authz.v1beta1.MsgGrant': {
    model: MODELS.MsgGrant,
    content: COMPONENTS.Grant,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgGrant',
  },
  '/cosmos.authz.v1beta1.MsgRevoke': {
    model: MODELS.MsgRevoke,
    content: COMPONENTS.Revoke,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgRevoke',
  },
  '/cosmos.authz.v1beta1.MsgExec': {
    model: MODELS.MsgExec,
    content: COMPONENTS.Exec,
    tagTheme: 'thirteen',
    tagDisplay: 'MsgExec',
  },
  // ========================
  // feegrant
  // ========================
  '/cosmos.feegrant.v1beta1.MsgGrantAllowance': {
    model: MODELS.MsgGrantAllowance,
    content: COMPONENTS.GrantAllowance,
    tagTheme: 'fourteen',
    tagDisplay: 'MsgGrantAllowance',
  },
  '/cosmos.feegrant.v1beta1.MsgRevokeAllowance': {
    model: MODELS.MsgRevokeAllowance,
    content: COMPONENTS.RevokeAllowance,
    tagTheme: 'fourteen',
    tagDisplay: 'MsgRevokeAllowance',
  },
  // ========================
  // vesting
  // ========================
  '/cosmos.vesting.v1beta1.MsgCreateVestingAccount': {
    model: MODELS.MsgCreateVestingAccount,
    content: COMPONENTS.CreateVestingAccount,
    tagTheme: 'fifteen',
    tagDisplay: 'MsgCreateVestingAccount',
  },
  '/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount': {
    model: MODELS.MsgCreatePeriodicVestingAccount,
    content: COMPONENTS.CreatePeriodicVestingAccount,
    tagTheme: 'fifteen',
    tagDisplay: 'MsgCreatePeriodicVestingAccount',
  },
};
type DefaultTypeToModel = typeof defaultTypeToModel;

// =====================================
// Update your chain's message types here
// =====================================
const customTypeToModel = {
  // ========================
  // profiles
  // ========================
  '/desmos.profiles.v3.MsgSaveProfile': {
    model: MODELS.MsgSaveProfile,
    content: COMPONENTS.SaveProfile,
    tagTheme: 'four',
    tagDisplay: 'txSaveProfileLabel',
  },
  '/desmos.profiles.v3.MsgDeleteProfile': {
    model: MODELS.MsgDeleteProfile,
    content: COMPONENTS.DeleteProfile,
    tagTheme: 'four',
    tagDisplay: 'txDeleteProfileLabel',
  },
  '/desmos.profiles.v3.MsgCreateRelationship': {
    model: MODELS.MsgCreateRelationship,
    content: COMPONENTS.CreateRelationship,
    tagTheme: 'four',
    tagDisplay: 'txCreateRelationshipLabel',
  },
  '/desmos.profiles.v3.MsgRequestDTagTransfer': {
    model: MODELS.MsgDtagTransferRequest,
    content: COMPONENTS.DtagTransferRequest,
    tagTheme: 'four',
    tagDisplay: 'txRequestDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgAcceptDTagTransfer': {
    model: MODELS.MsgDtagAcceptTransfer,
    content: COMPONENTS.DtagAcceptTransfer,
    tagTheme: 'four',
    tagDisplay: 'txAcceptDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgCancelDTagTransfer': {
    model: MODELS.MsgDtagCancelTransfer,
    content: COMPONENTS.DtagCancelTransfer,
    tagTheme: 'four',
    tagDisplay: 'txCancelDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgRefuseDTagTransfer': {
    model: MODELS.MsgDtagRefuseTransfer,
    content: COMPONENTS.DtagRefuseTransfer,
    tagTheme: 'four',
    tagDisplay: 'txRefuseDTagTransferLabel',
  },
  '/desmos.profiles.v3.MsgBlockUser': {
    model: MODELS.MsgBlockUser,
    content: COMPONENTS.BlockUser,
    tagTheme: 'four',
    tagDisplay: 'txBlockUserLabel',
  },
  '/desmos.profiles.v3.MsgUnblockUser': {
    model: MODELS.MsgUnblockUser,
    content: COMPONENTS.UnBlockUser,
    tagTheme: 'four',
    tagDisplay: 'txUnblockUserLabel',
  },
  // ========================
  // entity
  // ========================
  '/ixo.entity.v1beta1.MsgTransferEntity': {
    model: MODELS.MsgTransferEntity,
    // content: COMPONENTS.TransferEntity,
    tagTheme: 'four',
    tagDisplay: 'MsgTransferEntity',
  },
  '/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz': {
    model: MODELS.MsgGrantEntityAccountAuthz,
    tagTheme: 'four',
    tagDisplay: 'MsgGrantEntityAccountAuthz',
  },
  '/ixo.entity.v1beta1.MsgCreateEntity': {
    model: MODELS.MsgCreateEntity,
    tagTheme: 'four',
    tagDisplay: 'MsgCreateEntity',
  },
  '/ixo.entity.v1beta1.MsgCreateEntityAccounts': {
    model: MODELS.MsgCreateEntityAccounts,
    tagTheme: 'four',
    tagDisplay: 'MsgCreateEntityAccounts',
  },
  '/ixo.entity.v1beta1.MsgUpdateEntityVerified': {
    model: MODELS.MsgUpdateEntityVerified,
    tagTheme: 'four',
    tagDisplay: 'MsgUpdateEntityVerified',
  },
  '/ixo.entity.v1beta1.MsgUpdateEntity': {
    model: MODELS.MsgUpdateEntity,
    tagTheme: 'four',
    tagDisplay: 'MsgUpdateEntity',
  },
  // ========================
  // bonds
  // ========================
  '/ixo.bonds.v1beta1.MsgBuy': {
    model: MODELS.MsgBuy,
    tagTheme: 'four',
    tagDisplay: 'MsgBuy',
  },
  '/ixo.bonds.v1beta1.MsgCreateBond': {
    model: MODELS.MsgCreateBond,
    tagTheme: 'four',
    tagDisplay: 'MsgCreateBond',
  },
  '/ixo.bonds.v1beta1.MsgEditBond': {
    model: MODELS.MsgEditBond,
    tagTheme: 'four',
    tagDisplay: 'MsgEditBond',
  },
  '/ixo.bonds.v1beta1.MsgMakeOutcomePayment': {
    model: MODELS.MsgMakeOutcomePayment,
    tagTheme: 'four',
    tagDisplay: 'MsgMakeOutcomePayment',
  },
  '/ixo.bonds.v1beta1.MsgSell': {
    model: MODELS.MsgSell,
    tagTheme: 'four',
    tagDisplay: 'MsgSell',
  },
  '/ixo.bonds.v1beta1.MsgSetNextAlpha': {
    model: MODELS.MsgSetNextAlpha,
    tagTheme: 'four',
    tagDisplay: 'MsgSetNextAlpha',
  },
  '/ixo.bonds.v1beta1.MsgSwap': {
    model: MODELS.MsgSwap,
    tagTheme: 'four',
    tagDisplay: 'MsgSwap',
  },
  '/ixo.bonds.v1beta1.MsgUpdateBondState': {
    model: MODELS.MsgUpdateBondState,
    tagTheme: 'four',
    tagDisplay: 'MsgUpdateBondState',
  },
  '/ixo.bonds.v1beta1.MsgWithdrawReserve': {
    model: MODELS.MsgWithdrawReserve,
    tagTheme: 'four',
    tagDisplay: 'MsgWithdrawReserve',
  },
  '/ixo.bonds.v1beta1.MsgWithdrawShare': {
    model: MODELS.MsgWithdrawShare,
    tagTheme: 'four',
    tagDisplay: 'MsgWithdrawShare',
  },
  // ========================
  // claims
  // ========================
  '/ixo.claims.v1beta1.MsgCreateCollection': {
    model: MODELS.MsgCreateCollection,
    tagTheme: 'four',
    tagDisplay: 'MsgCreateCollection',
  },
  '/ixo.claims.v1beta1.MsgDisputeClaim': {
    model: MODELS.MsgDisputeClaim,
    tagTheme: 'four',
    tagDisplay: 'MsgDisputeClaim',
  },
  '/ixo.claims.v1beta1.MsgEvaluateClaim': {
    model: MODELS.MsgEvaluateClaim,
    tagTheme: 'four',
    tagDisplay: 'MsgEvaluateClaim',
  },
  '/ixo.claims.v1beta1.MsgSubmitClaim': {
    model: MODELS.MsgSubmitClaim,
    tagTheme: 'four',
    tagDisplay: 'MsgSubmitClaim',
  },
  '/ixo.claims.v1beta1.MsgWithdrawPayment': {
    model: MODELS.MsgWithdrawPayment,
    tagTheme: 'four',
    tagDisplay: 'MsgWithdrawPayment',
  },
  // ========================
  // token
  // ========================
  '/ixo.token.v1beta1.MsgCancelToken': {
    model: MODELS.MsgCancelToken,
    tagTheme: 'four',
    tagDisplay: 'MsgCancelToken',
  },
  '/ixo.token.v1beta1.MsgCreateToken': {
    model: MODELS.MsgCreateToken,
    tagTheme: 'four',
    tagDisplay: 'MsgCreateToken',
  },
  '/ixo.token.v1beta1.MsgMintToken': {
    model: MODELS.MsgMintToken,
    tagTheme: 'four',
    tagDisplay: 'MsgMintToken',
  },
  '/ixo.token.v1beta1.MsgPauseToken': {
    model: MODELS.MsgPauseToken,
    tagTheme: 'four',
    tagDisplay: 'MsgPauseToken',
  },
  '/ixo.token.v1beta1.MsgRetireToken': {
    model: MODELS.MsgRetireToken,
    tagTheme: 'four',
    tagDisplay: 'MsgRetireToken',
  },
  '/ixo.token.v1beta1.MsgStopToken': {
    model: MODELS.MsgStopToken,
    tagTheme: 'four',
    tagDisplay: 'MsgStopToken',
  },
  '/ixo.token.v1beta1.MsgTransferToken': {
    model: MODELS.MsgTransferToken,
    tagTheme: 'four',
    tagDisplay: 'MsgTransferToken',
  },
  // ========================
  // iid
  // ========================
  '/ixo.iid.v1beta1.MsgCreateIidDocument': {
    model: MODELS.MsgCreateIidDocument,
    tagTheme: 'four',
    tagDisplay: 'MsgCreateIidDocument',
  },
  '/ixo.iid.v1beta1.MsgDeactivateIID': {
    model: MODELS.MsgDeactivateIID,
    tagTheme: 'four',
    tagDisplay: 'MsgDeactivateIID',
  },
  '/ixo.iid.v1beta1.MsgUpdateIidDocument': {
    model: MODELS.MsgUpdateIidDocument,
    tagTheme: 'four',
    tagDisplay: 'MsgUpdateIidDocument',
  },
  '/ixo.iid.v1beta1.MsgAddVerification': {
    model: MODELS.MsgAddVerification,
    tagTheme: 'four',
    tagDisplay: 'MsgAddVerification',
  },
  '/ixo.iid.v1beta1.MsgRevokeVerification': {
    model: MODELS.MsgRevokeVerification,
    tagTheme: 'four',
    tagDisplay: 'MsgRevokeVerification',
  },
  '/ixo.iid.v1beta1.MsgSetVerificationRelationships': {
    model: MODELS.MsgSetVerificationRelationships,
    tagTheme: 'four',
    tagDisplay: 'MsgSetVerificationRelationships',
  },
  '/ixo.iid.v1beta1.MsgAddService': {
    model: MODELS.MsgAddService,
    tagTheme: 'four',
    tagDisplay: 'MsgAddService',
  },
  '/ixo.iid.v1beta1.MsgDeleteService': {
    model: MODELS.MsgDeleteService,
    tagTheme: 'four',
    tagDisplay: 'MsgDeleteService',
  },
  '/ixo.iid.v1beta1.MsgAddController': {
    model: MODELS.MsgAddController,
    tagTheme: 'four',
    tagDisplay: 'MsgAddController',
  },
  '/ixo.iid.v1beta1.MsgDeleteController': {
    model: MODELS.MsgDeleteController,
    tagTheme: 'four',
    tagDisplay: 'MsgDeleteController',
  },
  '/ixo.iid.v1beta1.MsgAddLinkedResource': {
    model: MODELS.MsgAddLinkedResource,
    tagTheme: 'four',
    tagDisplay: 'MsgAddLinkedResource',
  },
  '/ixo.iid.v1beta1.MsgDeleteLinkedResource': {
    model: MODELS.MsgDeleteLinkedResource,
    tagTheme: 'four',
    tagDisplay: 'MsgDeleteLinkedResource',
  },
  '/ixo.iid.v1beta1.MsgAddLinkedClaim': {
    model: MODELS.MsgAddLinkedClaim,
    tagTheme: 'four',
    tagDisplay: 'MsgAddLinkedClaim',
  },
  '/ixo.iid.v1beta1.MsgDeleteLinkedClaim': {
    model: MODELS.MsgDeleteLinkedClaim,
    tagTheme: 'four',
    tagDisplay: 'MsgDeleteLinkedClaim',
  },
  '/ixo.iid.v1beta1.MsgAddLinkedEntity': {
    model: MODELS.MsgAddLinkedEntity,
    tagTheme: 'four',
    tagDisplay: 'MsgAddLinkedEntity',
  },
  '/ixo.iid.v1beta1.MsgDeleteLinkedEntity': {
    model: MODELS.MsgDeleteLinkedEntity,
    tagTheme: 'four',
    tagDisplay: 'MsgDeleteLinkedEntity',
  },
  '/ixo.iid.v1beta1.MsgAddAccordedRight': {
    model: MODELS.MsgAddAccordedRight,
    tagTheme: 'four',
    tagDisplay: 'MsgAddAccordedRight',
  },
  '/ixo.iid.v1beta1.MsgDeleteAccordedRight': {
    model: MODELS.MsgDeleteAccordedRight,
    tagTheme: 'four',
    tagDisplay: 'MsgDeleteAccordedRight',
  },
  '/ixo.iid.v1beta1.MsgAddIidContext': {
    model: MODELS.MsgAddIidContext,
    tagTheme: 'four',
    tagDisplay: 'MsgAddIidContext',
  },
  '/ixo.iid.v1beta1.MsgDeleteIidContext': {
    model: MODELS.MsgDeleteIidContext,
    tagTheme: 'four',
    tagDisplay: 'MsgDeleteIidContext',
  },
};
type CustomTypeToModel = typeof customTypeToModel;

type TypeToModel = DefaultTypeToModel & CustomTypeToModel extends infer R1
  ? { [K in keyof R1]: R1[K] }
  : never;

type Data = TypeToModel[keyof TypeToModel];

const getDataByType = (type: string): Data | null => {
  if (isKeyOf(type, defaultTypeToModel) && defaultTypeToModel[type])
    return defaultTypeToModel[type];

  if (isKeyOf(type, customTypeToModel) && customTypeToModel[type]) return customTypeToModel[type];

  return null;
};

/**
 * Helper function that helps get model by type
 * @param type Model type
 */
export const getMessageModelByType = (type: string): Data['model'] => {
  const data = getDataByType(type);
  if (data) {
    return data.model;
  }

  return MODELS.MsgUnknown as Data['model'];
};

/**
 * Helper function to correctly display the correct UI
 * @param type Model type
 */
export const getMessageByType = <TMessage,>(message: TMessage, viewRaw: boolean, t: TFunction) => {
  const { type } = (message as { type: string }) ?? {};

  type ResultType = {
    content: FC<{ message: TMessage }>;
    tagDisplay: Data['tagDisplay'];
    tagTheme: TagTheme;
  };

  let results: ResultType = {
    content: COMPONENTS.Unknown as unknown as FC<{ message: TMessage }>,
    tagDisplay: 'txUnknownLabel',
    tagTheme: 'zero',
  };

  const data = getDataByType(type);

  if (data) {
    results = {
      content: data?.content as unknown as FC<{ message: TMessage }>,
      tagDisplay: data.tagDisplay,
      tagTheme: data.tagTheme as ResultType['tagTheme'],
    };
  }

  // If user asks to view the raw data
  if (viewRaw || !results.content) {
    results.content = COMPONENTS.Unknown as unknown as FC<{ message: TMessage }>;
  }

  const Content = results.content;
  return {
    type: <Tag value={t(`message_labels:${results.tagDisplay}`)} theme={results.tagTheme} />,
    message: <Content message={message as unknown as ComponentProps<typeof Content>['message']} />,
  };
};

export const convertMsgsToModels = (
  transaction?: {
    messages?: Array<{
      '@type': string;
    }>;
    logs?: Array<Log>;
  } | null
) => {
  const messages =
    transaction?.messages?.map((msg: object, i: number) => {
      const model = getMessageModelByType(R.pathOr<string>('', ['@type'], msg));
      if (model === MODELS.MsgWithdrawDelegatorReward) {
        const log = transaction?.logs?.[i];
        return MODELS.MsgWithdrawDelegatorReward.fromJson(msg, log);
      }
      if (model === MODELS.MsgWithdrawValidatorCommission) {
        const log = transaction?.logs?.[i];
        return MODELS.MsgWithdrawValidatorCommission.fromJson(msg, log);
      }
      return model.fromJson(msg);
    }) ?? [];

  return messages;
};
