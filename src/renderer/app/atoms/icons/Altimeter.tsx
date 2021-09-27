import { Icon } from 'src/types/Icon';

export const Altimeter: Icon = (props) => {
  return (
    <svg
      width={props.width || 25}
      viewBox="0 0 215 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`fill-current ${
          props.selected ? 'text-red-500' : 'text-gray-400'
        }`}
        d="M73.173 97.203L37.356 133.021V151.876L92.0291 97.203H73.173ZM81.056 158.877L116.873 123.06V97.203H110.677L49.001 158.877H81.056Z"
      />
      <path
        className={`fill-current ${
          props.selected ? 'text-blue-600' : 'text-gray-400'
        }`}
        d="M107.164 27.153C89.9469 27.153 75.989 21.183 75.989 13.813H138.337C138.337 21.183 124.38 27.153 107.164 27.153ZM154.232 0.666992H60.0959L41.429 46.536H172.899L154.232 0.666016V0.666992ZM107.164 228.927C124.38 228.927 138.337 234.897 138.337 242.26H75.989C75.989 234.897 89.9469 228.927 107.164 228.927ZM60.0959 255.416H154.232L172.899 209.544H41.429L60.0959 255.416Z"
      />
      <path
        className={`fill-current ${
          props.selected ? 'text-red-500' : 'text-gray-400'
        }`}
        d="M190.305 101.537H154.207V83.87H190.305V101.537ZM190.305 136.875H154.207V119.205H190.305V136.875ZM190.305 172.211H154.207V154.543H190.305V172.211ZM130.207 172.211H24.0229V83.869H130.207V172.211ZM190.305 59.869H24.0229C10.7669 59.869 0.0229492 70.613 0.0229492 83.869V172.211C0.0229492 185.465 10.7669 196.211 24.0229 196.211H190.305C203.561 196.211 214.307 185.465 214.307 172.211V83.869C214.307 70.613 203.561 59.869 190.305 59.869Z"
      />
    </svg>
  );
};