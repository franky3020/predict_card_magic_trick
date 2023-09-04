
docker rm --force magic_poker_server_2 && \
docker run -p 37003:3000 -d -e NODE_ENV=https --name magic_poker_server_2 magic_poker_backend

