FROM nimmis/apache-php5

MAINTAINER MaxymVlasov <m.vlasov@post.com>

# Change default Apache configuration
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

# Open ports
EXPOSE 80
EXPOSE 443

# Run Apache server in background
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
