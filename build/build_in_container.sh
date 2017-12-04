#!/usr/bin/env bash

binary="portainer-$1-$2"

echo "Type in your proxysetting like http://username:Userpassword@proxy-server:Port"
read proxyconnection
export http_proxy=$proxyconnection
export https_proxy=$proxyconnection

mkdir -p dist

docker run --privileged --rm -tv $(pwd)/api:/src -e BUILD_GOOS="$1" -e HTTP_PROXY=$proxyconnection -e HTTPS_PROXY=$proxyconnection -e BUILD_GOARCH="$2" portainer/golang-builder:cross-platform /src/cmd/portainer

mv "api/cmd/portainer/$binary" dist/
#sha256sum "dist/$binary" > portainer-checksum.txt
