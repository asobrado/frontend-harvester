# Frontend Harvester - bootstraping ngx-admin-lte

[![Join the chat at https://gitter.im/TwanoO67/ng2-admin-lte](https://badges.gitter.im/TwanoO67/ng2-admin-lte.svg)](https://gitter.im/TwanoO67/ng2-admin-lte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/TwanoO67/ng2-admin-lte.svg?branch=master)](https://travis-ci.org/TwanoO67/ng2-admin-lte)

Bootstraping of Angular4 with AdminLTE dashboard template
( Using ngx-admin-lte Library)

![Preview](https://almsaeedstudio.com/img/AdminLTE2.1.png)


## Launching with docker

```
./bin/start.sh
```

## Building with docker

```
./bin/prod.sh
```

## Lauching with node > 7 locally installed

```
npm install -g yarn
yarn
yarn start
```

## Developpement


For the feature on the Admin_LTE template, see the readme of this repo:
[https://github.com/TwanoO67/ngx-admin-lte](https://github.com/TwanoO67/ngx-admin-lte)

Adding a component

```
cd src/app/widgets/
yarn ng g component my-new-widget
```

Adding a page

```
cd src/app/pages/
yarn ng g component my-new-page
```

Adding a service

```
cd src/app/services/
yarn ng g service my-new-service
```
