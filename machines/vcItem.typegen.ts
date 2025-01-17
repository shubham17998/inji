// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'internalEvents': {
    '': { type: '' };
    'done.invoke.checkStatus': {
      type: 'done.invoke.checkStatus';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.downloadCredential': {
      type: 'done.invoke.downloadCredential';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.addKeyPair:invocation[0]': {
      type: 'done.invoke.vc-item.addKeyPair:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.addingWalletBindingId:invocation[0]': {
      type: 'done.invoke.vc-item.addingWalletBindingId:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]': {
      type: 'done.invoke.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.requestingBindingOtp:invocation[0]': {
      type: 'done.invoke.vc-item.requestingBindingOtp:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.requestingLock:invocation[0]': {
      type: 'done.invoke.vc-item.requestingLock:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.requestingOtp:invocation[0]': {
      type: 'done.invoke.vc-item.requestingOtp:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.requestingRevoke:invocation[0]': {
      type: 'done.invoke.vc-item.requestingRevoke:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.updatingPrivateKey:invocation[0]': {
      type: 'done.invoke.vc-item.updatingPrivateKey:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'done.invoke.vc-item.verifyingCredential:invocation[0]': {
      type: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.checkStatus': {
      type: 'error.platform.checkStatus';
      data: unknown;
    };
    'error.platform.downloadCredential': {
      type: 'error.platform.downloadCredential';
      data: unknown;
    };
    'error.platform.vc-item.addKeyPair:invocation[0]': {
      type: 'error.platform.vc-item.addKeyPair:invocation[0]';
      data: unknown;
    };
    'error.platform.vc-item.addingWalletBindingId:invocation[0]': {
      type: 'error.platform.vc-item.addingWalletBindingId:invocation[0]';
      data: unknown;
    };
    'error.platform.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]': {
      type: 'error.platform.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]';
      data: unknown;
    };
    'error.platform.vc-item.requestingBindingOtp:invocation[0]': {
      type: 'error.platform.vc-item.requestingBindingOtp:invocation[0]';
      data: unknown;
    };
    'error.platform.vc-item.requestingLock:invocation[0]': {
      type: 'error.platform.vc-item.requestingLock:invocation[0]';
      data: unknown;
    };
    'error.platform.vc-item.requestingRevoke:invocation[0]': {
      type: 'error.platform.vc-item.requestingRevoke:invocation[0]';
      data: unknown;
    };
    'error.platform.vc-item.updatingPrivateKey:invocation[0]': {
      type: 'error.platform.vc-item.updatingPrivateKey:invocation[0]';
      data: unknown;
    };
    'error.platform.vc-item.verifyingCredential:invocation[0]': {
      type: 'error.platform.vc-item.verifyingCredential:invocation[0]';
      data: unknown;
    };
    'xstate.init': { type: 'xstate.init' };
  };
  'invokeSrcNameMap': {
    addWalletBindnigId: 'done.invoke.vc-item.addingWalletBindingId:invocation[0]';
    checkDownloadExpiryLimit: 'done.invoke.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]';
    checkStatus: 'done.invoke.checkStatus';
    downloadCredential: 'done.invoke.downloadCredential';
    generateKeyPair: 'done.invoke.vc-item.addKeyPair:invocation[0]';
    requestBindingOtp: 'done.invoke.vc-item.requestingBindingOtp:invocation[0]';
    requestLock: 'done.invoke.vc-item.requestingLock:invocation[0]';
    requestOtp: 'done.invoke.vc-item.requestingOtp:invocation[0]';
    requestRevoke: 'done.invoke.vc-item.requestingRevoke:invocation[0]';
    updatePrivateKey: 'done.invoke.vc-item.updatingPrivateKey:invocation[0]';
    verifyCredential: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
  };
  'missingImplementations': {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  'eventsCausingActions': {
    clearOtp:
      | ''
      | 'CANCEL'
      | 'DISMISS'
      | 'REVOKE_VC'
      | 'STORE_RESPONSE'
      | 'done.invoke.vc-item.requestingBindingOtp:invocation[0]'
      | 'done.invoke.vc-item.requestingOtp:invocation[0]'
      | 'done.invoke.vc-item.updatingPrivateKey:invocation[0]'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]'
      | 'error.platform.vc-item.requestingLock:invocation[0]'
      | 'error.platform.vc-item.requestingRevoke:invocation[0]'
      | 'error.platform.vc-item.verifyingCredential:invocation[0]';
    clearTransactionId:
      | ''
      | 'CANCEL'
      | 'DISMISS'
      | 'STORE_RESPONSE'
      | 'done.invoke.vc-item.updatingPrivateKey:invocation[0]'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]'
      | 'error.platform.vc-item.verifyingCredential:invocation[0]';
    incrementDownloadCounter: 'POLL';
    logDownloaded: 'STORE_RESPONSE';
    logRevoked: 'STORE_RESPONSE';
    logWalletBindingFailure:
      | 'error.platform.vc-item.addKeyPair:invocation[0]'
      | 'error.platform.vc-item.addingWalletBindingId:invocation[0]'
      | 'error.platform.vc-item.requestingBindingOtp:invocation[0]'
      | 'error.platform.vc-item.updatingPrivateKey:invocation[0]';
    logWalletBindingSuccess: 'done.invoke.vc-item.updatingPrivateKey:invocation[0]';
    markVcValid: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    removeVcMetaDataFromStorage: 'STORE_ERROR';
    removeVcMetaDataFromVcMachine: 'DISMISS';
    requestStoredContext: 'GET_VC_RESPONSE' | 'REFRESH';
    requestVcContext: 'xstate.init';
    revokeVID: 'done.invoke.vc-item.requestingRevoke:invocation[0]';
    setCredential: 'GET_VC_RESPONSE' | 'STORE_RESPONSE';
    setDownloadInterval: 'done.invoke.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]';
    setLock: 'done.invoke.vc-item.requestingLock:invocation[0]';
    setMaxDownloadCount: 'done.invoke.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]';
    setOtp: 'INPUT_OTP';
    setOtpError:
      | 'error.platform.vc-item.requestingLock:invocation[0]'
      | 'error.platform.vc-item.requestingRevoke:invocation[0]';
    setPrivateKey: 'done.invoke.vc-item.addKeyPair:invocation[0]';
    setPublicKey: 'done.invoke.vc-item.addKeyPair:invocation[0]';
    setRevoke: 'done.invoke.vc-item.requestingRevoke:invocation[0]';
    setStoreError: 'STORE_ERROR';
    setStoreVerifiableCredential: 'CREDENTIAL_DOWNLOADED';
    setTag: 'SAVE_TAG';
    setThumbprintForWalletBindingId: 'done.invoke.vc-item.addingWalletBindingId:invocation[0]';
    setTransactionId:
      | 'INPUT_OTP'
      | 'REVOKE_VC'
      | 'done.invoke.vc-item.requestingOtp:invocation[0]'
      | 'error.platform.vc-item.requestingLock:invocation[0]'
      | 'error.platform.vc-item.requestingRevoke:invocation[0]';
    setVerifiableCredential: 'STORE_RESPONSE';
    setWalletBindingError:
      | 'error.platform.vc-item.addKeyPair:invocation[0]'
      | 'error.platform.vc-item.addingWalletBindingId:invocation[0]'
      | 'error.platform.vc-item.requestingBindingOtp:invocation[0]'
      | 'error.platform.vc-item.updatingPrivateKey:invocation[0]';
    setWalletBindingErrorEmpty:
      | 'CANCEL'
      | 'done.invoke.vc-item.updatingPrivateKey:invocation[0]';
    setWalletBindingId: 'done.invoke.vc-item.addingWalletBindingId:invocation[0]';
    storeContext:
      | 'CREDENTIAL_DOWNLOADED'
      | 'done.invoke.vc-item.updatingPrivateKey:invocation[0]'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    storeLock: 'done.invoke.vc-item.requestingLock:invocation[0]';
    storeTag: 'SAVE_TAG';
    updatePrivateKey: 'done.invoke.vc-item.updatingPrivateKey:invocation[0]';
    updateVc:
      | 'STORE_RESPONSE'
      | 'done.invoke.vc-item.updatingPrivateKey:invocation[0]'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]';
  };
  'eventsCausingDelays': {};
  'eventsCausingGuards': {
    hasCredential: 'GET_VC_RESPONSE' | 'STORE_RESPONSE';
    isDownloadAllowed: 'POLL';
    isVcValid: '';
  };
  'eventsCausingServices': {
    addWalletBindnigId: 'done.invoke.vc-item.addKeyPair:invocation[0]';
    checkDownloadExpiryLimit: 'STORE_RESPONSE';
    checkStatus:
      | 'done.invoke.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]'
      | 'error.platform.vc-item.checkingServerData.verifyingDownloadLimitExpiry:invocation[0]';
    downloadCredential: 'DOWNLOAD_READY';
    generateKeyPair: 'INPUT_OTP';
    requestBindingOtp: 'CONFIRM';
    requestLock: 'INPUT_OTP';
    requestOtp: 'LOCK_VC';
    requestRevoke: 'INPUT_OTP';
    updatePrivateKey: 'done.invoke.vc-item.addingWalletBindingId:invocation[0]';
    verifyCredential: '' | 'VERIFY';
  };
  'matchesStates':
    | 'acceptingBindingOtp'
    | 'acceptingOtpInput'
    | 'acceptingRevokeInput'
    | 'addKeyPair'
    | 'addingWalletBindingId'
    | 'checkingServerData'
    | 'checkingServerData.checkingStatus'
    | 'checkingServerData.downloadingCredential'
    | 'checkingServerData.savingFailed'
    | 'checkingServerData.savingFailed.idle'
    | 'checkingServerData.savingFailed.viewingVc'
    | 'checkingServerData.verifyingDownloadLimitExpiry'
    | 'checkingStore'
    | 'checkingVc'
    | 'checkingVerificationStatus'
    | 'editingTag'
    | 'idle'
    | 'invalid'
    | 'invalid.backend'
    | 'invalid.otp'
    | 'lockingVc'
    | 'loggingRevoke'
    | 'requestingBindingOtp'
    | 'requestingLock'
    | 'requestingOtp'
    | 'requestingRevoke'
    | 'revokingVc'
    | 'showBindingWarning'
    | 'showingWalletBindingError'
    | 'storingTag'
    | 'updatingPrivateKey'
    | 'verifyingCredential'
    | {
        checkingServerData?:
          | 'checkingStatus'
          | 'downloadingCredential'
          | 'savingFailed'
          | 'verifyingDownloadLimitExpiry'
          | { savingFailed?: 'idle' | 'viewingVc' };
        invalid?: 'backend' | 'otp';
      };
  'tags': never;
}
