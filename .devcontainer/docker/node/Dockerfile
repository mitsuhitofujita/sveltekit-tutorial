FROM node:18.14.0-bullseye

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        fonts-ipafont-gothic \
        fonts-ipafont-mincho \
        libasound2 \
        libatk-bridge2.0-0 \
        libatk1.0-0 \
        libatspi2.0-0 \
        libcups2 \
        libdbus-1-3 \
        libdrm2 \
        libgbm1 \
        libnspr4 \
        libnss3 \
        libxcomposite1 \
        libxdamage1 \
        libxfixes3 \
        libxkbcommon0 \
        libxrandr2 && \
    apt-get autoremove -y && \
    apt-get clean && \
	rm -rf /var/lib/apt/lists/*
RUN npm install -g \
        playwright \
        wrangler \
        aws-cdk
