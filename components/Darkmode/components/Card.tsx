import React from 'react';
import 'styles/Darkmode.css';

const Card: React.FC = () => {
    return (
      <svg className="card" viewBox="0 50 840 440" aria-hidden="true">
        <defs>
          <linearGradient
            id="gradient-1"
            gradientUnits="userSpaceOnUse"
            x1={420}
            y1={275}
            x2={420}
            y2={167}
            gradientTransform="matrix(1 0 0 -1 0 442)"
          >
            <stop
              offset={0.464}
              style={{
                stopOpacity: 0.2,
              }}
            />
            <stop
              offset={0.9}
              style={{
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <linearGradient
            id="gradient-2"
            gradientUnits="userSpaceOnUse"
            x1={420}
            y1={325}
            x2={420}
            y2={117.001}
            gradientTransform="matrix(1 0 0 -1 0 442)"
          >
            <stop
              offset={0.464}
              style={{
                stopOpacity: 0.2,
              }}
            />
            <stop
              offset={1}
              style={{
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <linearGradient
            id="gradient-3"
            gradientUnits="userSpaceOnUse"
            x1={420}
            y1={382}
            x2={420}
            y2={60.001}
            gradientTransform="matrix(1 0 0 -1 0 442)"
          >
            <stop
              offset={0.464}
              style={{
                stopOpacity: 0.16,
              }}
            />
            <stop
              offset={0.9}
              style={{
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <linearGradient
            id="gradient-4"
            gradientUnits="userSpaceOnUse"
            x1={420}
            y1={488.788}
            x2={420}
            y2={-46.967}
            gradientTransform="matrix(1 0 0 -1 0 442)"
          >
            <stop
              offset={0.089}
              style={{
                stopOpacity: 0.1,
              }}
            />
            <stop
              offset={0.464}
              style={{
                stopOpacity: 0.27,
              }}
            />
            <stop
              offset={0.896}
              style={{
                stopOpacity: 0,
              }}
            />
          </linearGradient>
          <linearGradient
            id="gradient-5"
            gradientUnits="userSpaceOnUse"
            x1={420}
            y1={610}
            x2={420}
            y2={-168.179}
            gradientTransform="matrix(1 0 0 -1 0 442)"
          >
            <stop
              offset={0.172}
              style={{
                stopOpacity: 0,
              }}
            />
            <stop
              offset={0.464}
              style={{
                stopOpacity: 0.21,
              }}
            />
            <stop
              offset={0.771}
              style={{
                stopOpacity: 0,
              }}
            />
          </linearGradient>
        </defs>
        <g className="orbits" transform="translate(420, 220)">
          <g>
            <circle
              className="orbit"
              style={{
                stroke: 'url(#gradient-1)',
                animationDelay: '0',
              }}
              r={53.4}
            />
          </g>
          <g>
            <circle
              className="orbit"
              style={{
                stroke: 'url(#gradient-2)',
                animationDelay: '0.03s',
              }}
              r={103.4}
            />
            <circle
              className="gray satellite"
              style={{
                animationDelay: '0.9s',
              }}
              cx={-69.6}
              cy={-76}
              r={5.8}
            />
          </g>
          <g>
            <circle
              className="orbit"
              style={{
                stroke: 'url(#gradient-3)',
                animationDelay: '0.06s',
              }}
              r={160.4}
            />
            <circle
              className="orange satellite"
              style={{
                animationDelay: '0.8s',
              }}
              cx={102.4}
              cy={-123}
              r={5.8}
            />
          </g>
          <g>
            <circle
              className="orbit"
              style={{
                stroke: 'url(#gradient-4)',
                animationDelay: '0.09s',
              }}
              r={267.3}
            />
            <circle
              className="orange satellite"
              style={{
                animationDelay: '0.6s',
              }}
              cx={-243.6}
              cy={111.4}
              r={5.8}
            />
            <circle
              className="gray satellite"
              style={{
                animationDelay: '1s',
              }}
              cx={250}
              cy={94.4}
              r={5.8}
            />
            <circle
              className="orange satellite"
              style={{
                animationDelay: '0.7s',
              }}
              cx={-236.6}
              cy={-123.6}
              r={5.8}
            />
          </g>
          <g>
            <circle
              className="orbit"
              style={{
                stroke: 'url(#gradient-5)',
                animationDelay: '0.12s',
              }}
              r={388.5}
            />
          </g>
        </g>
        <g id="center">
          <path
            d="M 247.640 160.632 C 238.182 163.537, 230 174.840, 230 185 C 230 195.185, 238.208 206.506, 247.640 209.331 C 250.313 210.132, 252.423 211.172, 252.329 211.643 C 252.077 212.907, 196.061 316.339, 195.118 317.282 C 194.676 317.724, 175.681 307.779, 152.907 295.183 C 130.133 282.587, 111.349 272.670, 111.165 273.144 C 110.736 274.252, 138.071 385.220, 139.049 386.342 C 139.453 386.805, 143.545 386.252, 148.142 385.113 C 152.739 383.974, 160.775 382.330, 166 381.460 C 171.225 380.590, 176.625 379.688, 178 379.455 C 185.406 378.205, 208.551 375.930, 223 375.033 C 269 372.179, 324.993 375.949, 362 384.393 C 367.775 385.711, 372.683 386.616, 372.906 386.405 C 373.650 385.701, 403.018 274.519, 402.757 273.394 C 402.616 272.786, 383.271 282.605, 359.768 295.214 C 336.265 307.823, 316.630 317.889, 316.134 317.583 C 315.126 316.960, 261 212.575, 261 211.254 C 261 210.792, 263.052 209.866, 265.560 209.195 C 274.602 206.777, 283 195.126, 283 185 C 283 174.573, 274.820 163.509, 264.941 160.575 C 258.480 158.656, 254.025 158.671, 247.640 160.632 M 152.453 200.275 C 139.813 205.356, 133.724 215.579, 135.319 229.042 C 136.018 234.949, 137.975 238.908, 142.364 243.297 C 147.849 248.782, 152.413 250.500, 161.500 250.500 C 170.587 250.500, 175.151 248.782, 180.636 243.297 C 186.293 237.640, 187.483 234.462, 187.483 225 C 187.483 218.781, 187.011 215.632, 185.724 213.266 C 183.263 208.741, 178.010 203.715, 173.403 201.478 C 168.690 199.190, 156.845 198.510, 152.453 200.275 M 334.994 202.874 C 330.376 204.389, 326.525 206.803, 323.362 210.165 C 318.007 215.856, 316.540 219.692, 316.540 228 C 316.540 236.307, 318.006 240.141, 323.362 245.838 C 328.791 251.612, 333.441 253.465, 342.500 253.465 C 351.559 253.465, 356.209 251.612, 361.638 245.838 C 366.994 240.141, 368.460 236.307, 368.460 228 C 368.460 219.693, 366.994 215.859, 361.638 210.162 C 356.937 205.162, 351.470 202.749, 344 202.376 C 340.425 202.198, 336.372 202.422, 334.994 202.874"
            style={{
              strokeWidth: 5.5625,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              stroke: '#bd1515',
              fill: 'none',
              transform: 'scale(0.2) translate(19.5%, -16%)', 
              transformOrigin: 'center',
              position: 'absolute', 
              top: '50%', 
              left: '60%', 
            }}
          />
        </g>
      </svg>
    );
  };

export default Card;
  
  