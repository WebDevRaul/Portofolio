import React from "react";

const Computer = ({
  width,
  height
}) => (
  <svg 
    width={width}
    height={height}
    version="1.1" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xlink="http://www.w3.org/1999/xlink" 
    x="0px" y="0px"
    viewBox="0 0 512 512" 
    fill="enable-background:new 0 0 512 512;" 
    space="preserve">
  <path fill="#002833;" d="M0,355.28V31.36c0-5.76,4.72-10.48,10.48-10.48H501.6c5.68,0,10.4,4.72,10.4,10.48v323.92"/>
  <g fill="#E8E8E8">
	  <path d="M512,355.28v41.76c0,5.76-4.72,10.48-10.48,10.48H10.48C4.72,407.52,0,402.8,0,397.04v-41.76H512z"
		/>
	  <rect x="146.32" y="480.64" fill="#E8E8E8;" width="219.44" height="10.48"/>
  </g>
  <polygon fill="#C9C9C9;" points="329.12,480.64 182.88,480.64 193.28,407.52 318.72,407.52 "/>
  <rect x="20.88" y="41.76" fill="#8AD5DD;" width="470.24" height="292.56"/>
</svg>
);

export default Computer;