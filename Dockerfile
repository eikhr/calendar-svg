FROM oven/bun

WORKDIR /app
ADD http.js /app/http.js

CMD ["bun", "run", "/app/http.js"]
