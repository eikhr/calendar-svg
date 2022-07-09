// http.js
const vmRegion = process.env.FLY_REGION || "local";
const locale = process.env.LOCALE || "nb-NO";
console.log(`Doing it from ${vmRegion}`);
export default {
  port: 80,
  fetch(request) {
    const region = request.headers.get("fly-region") || "??";
    const url = new URL(request.url);

    const date = new Date();
    return new Response(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#CFD8DC" d="M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"/>
        <path fill="#F44336" d="M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"/>
        <g fill="#B71C1C">
          <circle cx="36" cy="10" r="3"/>
          <circle cx="12" cy="10" r="3"/>
        </g>
        <g fill="#B0BEC5">
          <path transform="translate(3,0)" d="M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"/>
          <path transform="translate(-3,0)" d="M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"/>
        </g>
        <text
          id="month"
          x="24" 
          y="13" 
          fill="#fff" 
          font-family="monospace"
          font-size="8px"
          style="text-anchor: middle"
        >
          ${date.toLocaleString(locale, { month: "short" })}
        </text>
        <text 
          id="day"
          x="24" 
          y="32" 
          fill="#66757f" 
          font-family="monospace"
          font-size="22px"
          style="text-anchor: middle"
        >
          ${date.toLocaleString(locale, { day: "2-digit" }).replace(".", "")}
        </text>
        <text 
          id="weekday"
          x="24" 
          y="40" 
          fill="#66757f" 
          font-family="monospace"
          font-size="6px"
          style="text-anchor: middle"
        >
          ${date.toLocaleString(locale, { weekday: 'long' })}
        </text>
      </svg>
    `, { headers: { "Content-Type": "image/svg+xml" } });
  },
};
