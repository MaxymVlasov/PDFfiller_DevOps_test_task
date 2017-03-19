FROM node:7-alpine

MAINTAINER MaxymVlasov <m.vlasov@post.com>

COPY main.js /main.js
COPY html/ /html/

# So, this is cruth... for add hostname to statis html.
# See ./html/index.html for full understanding of how it works.
RUN hostname >> /html/index.html
RUN echo "</p></html>" >> /html/index.html

EXPOSE 8000

ENTRYPOINT ["node", "/main.js"]
