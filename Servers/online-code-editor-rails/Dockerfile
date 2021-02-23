FROM jruby:latest

FROM ruby:3.0.0

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client 

# COPY ./scripts/docker-install.sh /usr/bin/
# RUN chmod +x /usr/bin/docker-install.sh 
# RUN /usr/bin/docker-install.sh

WORKDIR /app

<<<<<<< HEAD
COPY Gemfile .
=======
COPY ./Gemfile ./
>>>>>>> Account
COPY Gemfile.lock .
RUN bundle install
COPY ./ ./
COPY entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 5000

CMD ["rails", "server", "-b", "0.0.0.0",  "-p", "5000" ]