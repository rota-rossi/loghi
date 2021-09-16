import usbDetect, { Device } from 'usb-detection';

type StartMonitoringCB = (device: Device) => void;

export const startUSBMonitoring = (callback: StartMonitoringCB) => {
  usbDetect.startMonitoring();
  usbDetect.on('add', (device) => {
    console.log('inside usbDetect', device);
    callback(device);
  });
  usbDetect.on('remove', (device) => {
    console.log('removed - inside usbDetect', device);
  });
};

export const stopUSBMonitoring = () => {
  usbDetect.stopMonitoring();
};
