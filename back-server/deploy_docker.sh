
docker build -t magic_poker_backend . && \

docker rm --force magic_poker_server_1 && \
docker run -p 37002:3000 -d -e NODE_ENV=https --name magic_poker_server_1 magic_poker_backend



