# Quick Start

1. Build Image

```bash
# docker build -t <username/image-name:version> .
# example:
docker build -t josestg/docker-express-example:1.0 .
```

2. Run and create a new container.

```bash
# docker run -p <host:container> --name <your-container-name> <username/image-name:version>

docker run -p 3001:3000 --name container-express-example josestg/docker-express-example:1.0
```

3. Stop running container

```bash
# docker stop <your-container-name>
docker stop container-express-example
```

4. Run existing container

```bash
# docker start <your-container-name>
docker start container-express-example
```

5. Remove existing container

```bash
# docker rm <your-container-name>
docker rm container-express-example
```

6. Show running containers

```bash
docker ps
```
