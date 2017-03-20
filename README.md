# PDFfiller_DevOps_test_task

* [Task information](https://pp.userapi.com/c837723/v837723502/270ed/wv0ArW9rKj8.jpg) (in photo)
* [Useful commands](https://gist.github.com/MaxymVlasov/3d6b3e2c3d675cbd830dfa7f5f8f7c9e) - gist files with command which used in the process of the assignment
* [Docker hub repo](https://hub.docker.com/r/maxymvlasov/)

**Status:** In process

Running by Docker Swarm with 1 manager and 2 workers:

![](https://pp.userapi.com/c837723/v837723502/270c8/3K0ms5co1ns.jpg)

Nginx have 1 instance and (should) work as load balancer.

Apache and NodeJS have 3 instancies:

![](https://pp.userapi.com/c837723/v837723502/270bf/kZfB_sKdPYQ.jpg)

Nginx links to all Apaches, one Apache link to one NodeJS.

===

Some people recommend use overlay networks `nginx-apache` & `nginx-nodejs` to make all work, but I have any idea how it trully realise.

***If you have any useful information, please, send it to me on `m.vlasov at post.com`***
