# ksrv:autoform-clockpicker

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "clockpicker", which renders an input using the [clock-style timepicker for Bootstrap](https://github.com/weareoutman/clockpicker/tree/v0.0.7).

## Installation

In a Meteor app directory, enter:
```bash
$ meteor add ksrv:autoform-clockpicker
```

## Usage

```js
{
    somefield: {
        type: String,
        label: '...',
        autoform: {
            type: 'ksrv:clockpicker',
        }
    }
}
```

Set left icon input group using bootstrap glyphicon-time

```js
{
    time: {
        type: String,
        autoform: {
            type: 'ksrv:clockpicker',
            iconLeft: true
        }
    }
}
```

Set right icon input group using bootstrap glyphicon-time

```js
{
    time: {
        type: String,
        autoform: {
            type: 'ksrv:clockpicker',
            iconRight: true
        }
    }
}
```

Set custom left icon input group

```js
{
    time: {
        type: String,
        autoform: {
            type: 'ksrv:clockpicker',
            iconLeft: 'fa fa-clock-o'
        }
    }
}
```

Set clockpicker options

```js
{
    time: {
        type: String,
        autoform: {
            type: 'ksrv:clockpicker',
            clockpickerOptions: {
                autoclose: true
            }
        }
    }
}
```
