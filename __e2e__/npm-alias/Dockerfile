ARG NODE_VERSION=16

FROM node:$NODE_VERSION-alpine
ARG NPM_VERSION

WORKDIR /var/test/
COPY * /var/test/

RUN if [[ "$NPM_VERSION" == "latest" ]] ; then npm install -g npm ; fi

RUN node --version
RUN npm --version

RUN npm init --yes
# Alias "ms" as "abort-controller", so we are actually running "ms".
RUN npm install abort-controller@npm:ms
RUN npm install --legacy-peer-deps ./`ls abort-controller-es5-*.tgz`

ENTRYPOINT node ./index.js
