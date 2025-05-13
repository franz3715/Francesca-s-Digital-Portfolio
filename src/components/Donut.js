import { useEffect, useRef } from 'react';

export default function Donut() {
  const donutRef = useRef(null);

  useEffect(() => {
    let A = 0, B = 0, M = Math;

    const draw = () => {
      let s = [], t = [];
      A+= 0.05;
      B+= 0.07;

      const o = M.cos(A), e= M.sin(A), n = M.cos(B), c = M.sin(B);

      for (let i=0; i< 1760; i++) {
        s[i]=i%80 === 79 ? '\n' : ' ';
        t[i]=0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        const r = M.cos(j), a = M.sin(j);

        for (let i = 0; i < 6.28; i += 0.02) {
          const l= M.sin(i), f = M.cos(i), A = r + 2;
          const B= 1 / (l * A * e + a * o + 5);
          const d= l * A * o - a * e;
          const m= 40 + (30 * B * (f * A * n - d * c)) | 0;
          const v= 12 + (15 * B * (f * A * c + d * n)) | 0;
          const I= m + 80 * v;
          const h= 8 * ((a * e - l * r * o) * n - l * r * e - a * o - f * r * c) | 0;

          if (v <22 && v >= 0 && m >= 0 && m < 79 && B > t[I]) {
            t[I]= B;
            s[I] = '.,-~:;=!*#$@'[h > 0 ? h : 0];
          }
        }
      }

      if (donutRef.current) {
        donutRef.current.innerText = s.join('');
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <pre
      ref={donutRef}
      style={{
        fontFamily:`'Courier New', Courier, monospace`,
        fontSize: '12px',
        letterSpacing: '-1px',
        lineHeight: '10px',
        color: '#FFB6C1',
        backgroundColor: '#000',
        padding: '1rem',
        borderRadius: '8px',
        whiteSpace: 'none',
        overflow: 'auto',
        height: '300px',
      }}
    />
  );
}
