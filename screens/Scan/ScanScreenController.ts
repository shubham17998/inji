import { useSelector } from '@xstate/react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { selectVcLabel } from '../../machines/settings';
import { selectShareableVcs } from '../../machines/vc';
import { GlobalContext } from '../../shared/GlobalContext';
import {
  selectIsLocationDenied,
  selectIsLocationDisabled,
  selectIsQrLoginStoring,
  selectIsScanning,
  selectIsShowQrLogin,
  selectQrLoginRef,
} from '../../machines/openIdBle/scan/selectors';
import { selectIsBluetoothDenied } from '../../machines/openIdBle/commonSelectors';
import { ScanEvents } from '../../machines/openIdBle/scan/scanMachine';

export function useScanScreen() {
  const { t } = useTranslation('ScanScreen');
  const { appService } = useContext(GlobalContext);
  const scanService = appService.children.get('scan');
  const settingsService = appService.children.get('settings');
  const vcService = appService.children.get('vc');

  const shareableVcs = useSelector(vcService, selectShareableVcs);

  const isLocationDisabled = useSelector(scanService, selectIsLocationDisabled);
  const isLocationDenied = useSelector(scanService, selectIsLocationDenied);
  const isBluetoothPermissionDenied = useSelector(
    scanService,
    selectIsBluetoothDenied
  );
  const locationError = { message: '', button: '' };

  if (isLocationDisabled) {
    locationError.message = t('errors.locationDisabled.message');
    locationError.button = t('errors.locationDisabled.button');
  } else if (isLocationDenied) {
    locationError.message = t('errors.locationDenied.message');
    locationError.button = t('errors.locationDenied.button');
  }

  return {
    locationError,
    vcLabel: useSelector(settingsService, selectVcLabel),

    isEmpty: !shareableVcs.length,
    isBluetoothPermissionDenied,
    isLocationDisabled,
    isLocationDenied,
    isScanning: useSelector(scanService, selectIsScanning),
    isQrLogin: useSelector(scanService, selectIsShowQrLogin),
    isQrLoginstoring: useSelector(scanService, selectIsQrLoginStoring),
    isQrRef: useSelector(scanService, selectQrLoginRef),
    LOCATION_REQUEST: () => scanService.send(ScanEvents.LOCATION_REQUEST()),
    SCAN: (qrCode: string) => scanService.send(ScanEvents.SCAN(qrCode)),
  };
}
