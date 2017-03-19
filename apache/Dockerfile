FROM nimmis/apache-php5

MAINTAINER MaxymVlasov <m.vlasov@post.com>

# Add rewrite module to Apache
# Need for port forwarding for NodeJS
RUN a2enmod rewrite && service apache2 restart

# Change default Apache configuration
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ports.conf /etc/apache2/ports.conf

# Open port
EXPOSE 8080

# Run Apache server in background
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
