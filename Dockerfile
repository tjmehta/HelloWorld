FROM node
RUN ulimit -c unlimited
ADD . /node-hello-world
ENV PORT 80
EXPOSE 80
WORKDIR /node-hello-world
CMD npm start
