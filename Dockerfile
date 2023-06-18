FROM oven/bun

WORKDIR /app
ADD http.js /app/http.js

EXPOSE 80

CMD ["bun", "run", "/app/http.js"]
