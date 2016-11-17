
import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';
import { _ }        from 'meteor/underscore';
import './clockpicker.html';


AutoForm.addInputType('ksrv:clockpicker', {
    template: 'ksrvClockpicker',

    valueOut () {
        return this.val();
    },

    contextAdjust (context) {
        context.atts = context.atts || {};
        context.atts.clockpickerOptions = context.atts.clockpickerOptions || {};
        return context;
    }
});

Template.ksrvClockpicker.onRendered(function () {
    this.$('.clockpicker').clockpicker(this.data.atts.clockpickerOptions);
});

Template.ksrvClockpickerInput.helpers({
    atts: function(){
        let atts = _.clone(this.atts);
        return _.omit(atts, 'clockpickerOptions', 'inputGroup');
    }
});

Template.ksrvClockpickerIcon.helpers({
    icon () {
        return typeof this.icon == 'string' ? this.icon : 'glyphicon glyphicon-time';
    }
});