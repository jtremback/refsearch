// var options = {
//         valueNames: [ 'func' ]
// };

// var hackerList = new List('func-list', options);

var db = [
  {
    "link": "http://backbonejs.org/#Events-on",
    "language": "js",
    "lib": "backbone",
    "func": "object.on(event, callback, [context])"
  },
  {
    "link": "http://backbonejs.org/#Events-off",
    "language": "js",
    "lib": "backbone",
    "func": "object.off([event], [callback], [context])"
  },
  {
    "link": "http://backbonejs.org/#Events-trigger",
    "language": "js",
    "lib": "backbone",
    "func": "object.trigger(event, [*args])"
  },
  {
    "link": "http://backbonejs.org/#Events-once",
    "language": "js",
    "lib": "backbone",
    "func": "object.once(event, callback, [context])"
  },
  {
    "link": "http://backbonejs.org/#Events-listenTo",
    "language": "js",
    "lib": "backbone",
    "func": "object.listenTo(other, event, callback)"
  },
  {
    "link": "http://backbonejs.org/#Events-stopListening",
    "language": "js",
    "lib": "backbone",
    "func": "object.stopListening([other], [event], [callback])"
  },
  {
    "link": "http://backbonejs.org/#Events-catalog",
    "language": "js",
    "lib": "backbone",
    "func": ""
  },
  {
    "link": "http://backbonejs.org/#Model-extend",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.Model.extend(properties, [classProperties])"
  },
  {
    "link": "http://backbonejs.org/#Model-constructor",
    "language": "js",
    "lib": "backbone",
    "func": "new Model([attributes], [options])"
  },
  {
    "link": "http://backbonejs.org/#Model-get",
    "language": "js",
    "lib": "backbone",
    "func": "model.get(attribute)"
  },
  {
    "link": "http://backbonejs.org/#Model-set",
    "language": "js",
    "lib": "backbone",
    "func": "model.set(attributes, [options])"
  },
  {
    "link": "http://backbonejs.org/#Model-escape",
    "language": "js",
    "lib": "backbone",
    "func": "model.escape(attribute)"
  },
  {
    "link": "http://backbonejs.org/#Model-has",
    "language": "js",
    "lib": "backbone",
    "func": "model.has(attribute)"
  },
  {
    "link": "http://backbonejs.org/#Model-unset",
    "language": "js",
    "lib": "backbone",
    "func": "model.unset(attribute, [options])"
  },
  {
    "link": "http://backbonejs.org/#Model-clear",
    "language": "js",
    "lib": "backbone",
    "func": "model.clear([options])"
  },
  {
    "link": "http://backbonejs.org/#Model-id",
    "language": "js",
    "lib": "backbone",
    "func": "model.id"
  },
  {
    "link": "http://backbonejs.org/#Model-idAttribute",
    "language": "js",
    "lib": "backbone",
    "func": "model.idAttribute"
  },
  {
    "link": "http://backbonejs.org/#Model-cid",
    "language": "js",
    "lib": "backbone",
    "func": "model.cid"
  },
  {
    "link": "http://backbonejs.org/#Model-attributes",
    "language": "js",
    "lib": "backbone",
    "func": "model.attributes"
  },
  {
    "link": "http://backbonejs.org/#Model-changed",
    "language": "js",
    "lib": "backbone",
    "func": "model.changed"
  },
  {
    "link": "http://backbonejs.org/#Model-defaults",
    "language": "js",
    "lib": "backbone",
    "func": "model.defaults or model.defaults()"
  },
  {
    "link": "http://backbonejs.org/#Model-toJSON",
    "language": "js",
    "lib": "backbone",
    "func": "model.toJSON()"
  },
  {
    "link": "http://backbonejs.org/#Model-sync",
    "language": "js",
    "lib": "backbone",
    "func": "model.sync(method, model, [options])"
  },
  {
    "link": "http://backbonejs.org/#Model-fetch",
    "language": "js",
    "lib": "backbone",
    "func": "model.fetch([options])"
  },
  {
    "link": "http://backbonejs.org/#Model-save",
    "language": "js",
    "lib": "backbone",
    "func": "model.save([attributes], [options])"
  },
  {
    "link": "http://backbonejs.org/#Model-destroy",
    "language": "js",
    "lib": "backbone",
    "func": "model.destroy([options])"
  },
  {
    "link": "http://backbonejs.org/#Model-validate",
    "language": "js",
    "lib": "backbone",
    "func": "model.validate(attributes, options)"
  },
  {
    "link": "http://backbonejs.org/#Model-validationError",
    "language": "js",
    "lib": "backbone",
    "func": "model.validationError"
  },
  {
    "link": "http://backbonejs.org/#Model-url",
    "language": "js",
    "lib": "backbone",
    "func": "model.url()"
  },
  {
    "link": "http://backbonejs.org/#Model-urlRoot",
    "language": "js",
    "lib": "backbone",
    "func": "model.urlRoot or model.urlRoot()"
  },
  {
    "link": "http://backbonejs.org/#Model-parse",
    "language": "js",
    "lib": "backbone",
    "func": "model.parse(response, options)"
  },
  {
    "link": "http://backbonejs.org/#Model-clone",
    "language": "js",
    "lib": "backbone",
    "func": "model.clone()"
  },
  {
    "link": "http://backbonejs.org/#Model-isNew",
    "language": "js",
    "lib": "backbone",
    "func": "model.isNew()"
  },
  {
    "link": "http://backbonejs.org/#Model-hasChanged",
    "language": "js",
    "lib": "backbone",
    "func": "model.hasChanged([attribute])"
  },
  {
    "link": "http://backbonejs.org/#Model-changedAttributes",
    "language": "js",
    "lib": "backbone",
    "func": "model.changedAttributes([attributes])"
  },
  {
    "link": "http://backbonejs.org/#Model-previous",
    "language": "js",
    "lib": "backbone",
    "func": "model.previous(attribute)"
  },
  {
    "link": "http://backbonejs.org/#Model-previousAttributes",
    "language": "js",
    "lib": "backbone",
    "func": "model.previousAttributes()"
  },
  {
    "link": "http://backbonejs.org/#Collection-extend",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.Collection.extend(properties, [classProperties])"
  },
  {
    "link": "http://backbonejs.org/#Collection-model",
    "language": "js",
    "lib": "backbone",
    "func": "collection.model"
  },
  {
    "link": "http://backbonejs.org/#Collection-constructor",
    "language": "js",
    "lib": "backbone",
    "func": "new Collection([models], [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-models",
    "language": "js",
    "lib": "backbone",
    "func": "collection.models"
  },
  {
    "link": "http://backbonejs.org/#Collection-toJSON",
    "language": "js",
    "lib": "backbone",
    "func": "collection.toJSON()"
  },
  {
    "link": "http://backbonejs.org/#Collection-sync",
    "language": "js",
    "lib": "backbone",
    "func": "collection.sync(method, collection, [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-Underscore-Methods",
    "language": "js",
    "lib": "backbone",
    "func": ""
  },
  {
    "link": "http://backbonejs.org/#Collection-add",
    "language": "js",
    "lib": "backbone",
    "func": "collection.add(models, [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-remove",
    "language": "js",
    "lib": "backbone",
    "func": "collection.remove(models, [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-reset",
    "language": "js",
    "lib": "backbone",
    "func": "collection.reset([models], [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-update",
    "language": "js",
    "lib": "backbone",
    "func": "collection.update(models, [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-get",
    "language": "js",
    "lib": "backbone",
    "func": "collection.get(id)"
  },
  {
    "link": "http://backbonejs.org/#Collection-at",
    "language": "js",
    "lib": "backbone",
    "func": "collection.at(index)"
  },
  {
    "link": "http://backbonejs.org/#Collection-push",
    "language": "js",
    "lib": "backbone",
    "func": "collection.push(model, [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-pop",
    "language": "js",
    "lib": "backbone",
    "func": "collection.pop([options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-unshift",
    "language": "js",
    "lib": "backbone",
    "func": "collection.unshift(model, [options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-shift",
    "language": "js",
    "lib": "backbone",
    "func": "collection.shift([options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-slice",
    "language": "js",
    "lib": "backbone",
    "func": "collection.slice(begin, end)"
  },
  {
    "link": "http://backbonejs.org/#Collection-length",
    "language": "js",
    "lib": "backbone",
    "func": "collection.length"
  },
  {
    "link": "http://backbonejs.org/#Collection-comparator",
    "language": "js",
    "lib": "backbone",
    "func": "collection.comparator"
  },
  {
    "link": "http://backbonejs.org/#Collection-sort",
    "language": "js",
    "lib": "backbone",
    "func": "collection.sort([options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-pluck",
    "language": "js",
    "lib": "backbone",
    "func": "collection.pluck(attribute)"
  },
  {
    "link": "http://backbonejs.org/#Collection-where",
    "language": "js",
    "lib": "backbone",
    "func": "collection.where(attributes)"
  },
  {
    "link": "http://backbonejs.org/#Collection-url",
    "language": "js",
    "lib": "backbone",
    "func": "collection.url or collection.url()"
  },
  {
    "link": "http://backbonejs.org/#Collection-parse",
    "language": "js",
    "lib": "backbone",
    "func": "collection.parse(response, options)"
  },
  {
    "link": "http://backbonejs.org/#Collection-clone",
    "language": "js",
    "lib": "backbone",
    "func": "collection.clone()"
  },
  {
    "link": "http://backbonejs.org/#Collection-fetch",
    "language": "js",
    "lib": "backbone",
    "func": "collection.fetch([options])"
  },
  {
    "link": "http://backbonejs.org/#Collection-create",
    "language": "js",
    "lib": "backbone",
    "func": "collection.create(attributes, [options])"
  },
  {
    "link": "http://backbonejs.org/#Router-extend",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.Router.extend(properties, [classProperties])"
  },
  {
    "link": "http://backbonejs.org/#Router-routes",
    "language": "js",
    "lib": "backbone",
    "func": "router.routes"
  },
  {
    "link": "http://backbonejs.org/#Router-constructor",
    "language": "js",
    "lib": "backbone",
    "func": "new Router([options])"
  },
  {
    "link": "http://backbonejs.org/#Router-route",
    "language": "js",
    "lib": "backbone",
    "func": "router.route(route, name, [callback])"
  },
  {
    "link": "http://backbonejs.org/#Router-navigate",
    "language": "js",
    "lib": "backbone",
    "func": "router.navigate(fragment, [options])"
  },
  {
    "link": "http://backbonejs.org/#History-start",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.history.start([options])"
  },
  {
    "link": "http://backbonejs.org/#Sync-ajax",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.ajax = function(request) { ... };"
  },
  {
    "link": "http://backbonejs.org/#Sync-emulateHTTP",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.emulateHTTP = true"
  },
  {
    "link": "http://backbonejs.org/#Sync-emulateJSON",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.emulateJSON = true"
  },
  {
    "link": "http://backbonejs.org/#View-extend",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.View.extend(properties, [classProperties])"
  },
  {
    "link": "http://backbonejs.org/#View-constructor",
    "language": "js",
    "lib": "backbone",
    "func": "new View([options])"
  },
  {
    "link": "http://backbonejs.org/#View-el",
    "language": "js",
    "lib": "backbone",
    "func": "view.el"
  },
  {
    "link": "http://backbonejs.org/#View-$el",
    "language": "js",
    "lib": "backbone",
    "func": "view.$el"
  },
  {
    "link": "http://backbonejs.org/#View-setElement",
    "language": "js",
    "lib": "backbone",
    "func": "view.setElement(element)"
  },
  {
    "link": "http://backbonejs.org/#View-attributes",
    "language": "js",
    "lib": "backbone",
    "func": "view.attributes"
  },
  {
    "link": "http://backbonejs.org/#View-dollar",
    "language": "js",
    "lib": "backbone",
    "func": "view.$(selector)"
  },
  {
    "link": "http://backbonejs.org/#View-render",
    "language": "js",
    "lib": "backbone",
    "func": "view.render()"
  },
  {
    "link": "http://backbonejs.org/#View-remove",
    "language": "js",
    "lib": "backbone",
    "func": "view.remove()"
  },
  {
    "link": "http://backbonejs.org/#View-delegateEvents",
    "language": "js",
    "lib": "backbone",
    "func": "delegateEvents([events])"
  },
  {
    "link": "http://backbonejs.org/#View-undelegateEvents",
    "language": "js",
    "lib": "backbone",
    "func": "undelegateEvents()"
  },
  {
    "link": "http://backbonejs.org/#Utility-Backbone-noConflict",
    "language": "js",
    "lib": "backbone",
    "func": "var backbone = Backbone.noConflict();"
  },
  {
    "link": "http://backbonejs.org/#Utility-Backbone-$",
    "language": "js",
    "lib": "backbone",
    "func": "Backbone.$ = $;"
  },
  {
    "link": "http://underscorejs.org/#each",
    "language": "js",
    "lib": "underscore",
    "func": "_.each(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#map",
    "language": "js",
    "lib": "underscore",
    "func": "_.map(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#reduce",
    "language": "js",
    "lib": "underscore",
    "func": "_.reduce(list, iterator, memo, [context])"
  },
  {
    "link": "http://underscorejs.org/#reduceRight",
    "language": "js",
    "lib": "underscore",
    "func": "_.reduceRight(list, iterator, memo, [context])"
  },
  {
    "link": "http://underscorejs.org/#find",
    "language": "js",
    "lib": "underscore",
    "func": "_.find(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#filter",
    "language": "js",
    "lib": "underscore",
    "func": "_.filter(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#where",
    "language": "js",
    "lib": "underscore",
    "func": "_.where(list, properties)"
  },
  {
    "link": "http://underscorejs.org/#findWhere",
    "language": "js",
    "lib": "underscore",
    "func": "_.findWhere(list, properties)"
  },
  {
    "link": "http://underscorejs.org/#reject",
    "language": "js",
    "lib": "underscore",
    "func": "_.reject(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#every",
    "language": "js",
    "lib": "underscore",
    "func": "_.every(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#some",
    "language": "js",
    "lib": "underscore",
    "func": "_.some(list, [iterator], [context])"
  },
  {
    "link": "http://underscorejs.org/#contains",
    "language": "js",
    "lib": "underscore",
    "func": "_.contains(list, value)"
  },
  {
    "link": "http://underscorejs.org/#invoke",
    "language": "js",
    "lib": "underscore",
    "func": "_.invoke(list, methodName, [*arguments])"
  },
  {
    "link": "http://underscorejs.org/#pluck",
    "language": "js",
    "lib": "underscore",
    "func": "_.pluck(list, propertyName)"
  },
  {
    "link": "http://underscorejs.org/#max",
    "language": "js",
    "lib": "underscore",
    "func": "_.max(list, [iterator], [context])"
  },
  {
    "link": "http://underscorejs.org/#min",
    "language": "js",
    "lib": "underscore",
    "func": "_.min(list, [iterator], [context])"
  },
  {
    "link": "http://underscorejs.org/#sortBy",
    "language": "js",
    "lib": "underscore",
    "func": "_.sortBy(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#groupBy",
    "language": "js",
    "lib": "underscore",
    "func": "_.groupBy(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#countBy",
    "language": "js",
    "lib": "underscore",
    "func": "_.countBy(list, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#shuffle",
    "language": "js",
    "lib": "underscore",
    "func": "_.shuffle(list)"
  },
  {
    "link": "http://underscorejs.org/#toArray",
    "language": "js",
    "lib": "underscore",
    "func": "_.toArray(list)"
  },
  {
    "link": "http://underscorejs.org/#size",
    "language": "js",
    "lib": "underscore",
    "func": "_.size(list)"
  },
  {
    "link": "http://underscorejs.org/#arrays",
    "language": "js",
    "lib": "underscore",
    "func": ""
  },
  {
    "link": "http://underscorejs.org/#first",
    "language": "js",
    "lib": "underscore",
    "func": "_.first(array, [n])"
  },
  {
    "link": "http://underscorejs.org/#initial",
    "language": "js",
    "lib": "underscore",
    "func": "_.initial(array, [n])"
  },
  {
    "link": "http://underscorejs.org/#last",
    "language": "js",
    "lib": "underscore",
    "func": "_.last(array, [n])"
  },
  {
    "link": "http://underscorejs.org/#rest",
    "language": "js",
    "lib": "underscore",
    "func": "_.rest(array, [index])"
  },
  {
    "link": "http://underscorejs.org/#compact",
    "language": "js",
    "lib": "underscore",
    "func": "_.compact(array)"
  },
  {
    "link": "http://underscorejs.org/#flatten",
    "language": "js",
    "lib": "underscore",
    "func": "_.flatten(array, [shallow])"
  },
  {
    "link": "http://underscorejs.org/#without",
    "language": "js",
    "lib": "underscore",
    "func": "_.without(array, [*values])"
  },
  {
    "link": "http://underscorejs.org/#union",
    "language": "js",
    "lib": "underscore",
    "func": "_.union(*arrays)"
  },
  {
    "link": "http://underscorejs.org/#intersection",
    "language": "js",
    "lib": "underscore",
    "func": "_.intersection(*arrays)"
  },
  {
    "link": "http://underscorejs.org/#difference",
    "language": "js",
    "lib": "underscore",
    "func": "_.difference(array, *others)"
  },
  {
    "link": "http://underscorejs.org/#uniq",
    "language": "js",
    "lib": "underscore",
    "func": "_.uniq(array, [isSorted], [iterator])"
  },
  {
    "link": "http://underscorejs.org/#zip",
    "language": "js",
    "lib": "underscore",
    "func": "_.zip(*arrays)"
  },
  {
    "link": "http://underscorejs.org/#object",
    "language": "js",
    "lib": "underscore",
    "func": "_.object(list, [values])"
  },
  {
    "link": "http://underscorejs.org/#indexOf",
    "language": "js",
    "lib": "underscore",
    "func": "_.indexOf(array, value, [isSorted])"
  },
  {
    "link": "http://underscorejs.org/#lastIndexOf",
    "language": "js",
    "lib": "underscore",
    "func": "_.lastIndexOf(array, value, [fromIndex])"
  },
  {
    "link": "http://underscorejs.org/#sortedIndex",
    "language": "js",
    "lib": "underscore",
    "func": "_.sortedIndex(list, value, [iterator], [context])"
  },
  {
    "link": "http://underscorejs.org/#range",
    "language": "js",
    "lib": "underscore",
    "func": "_.range([start], stop, [step])"
  },
  {
    "link": "http://underscorejs.org/#functions",
    "language": "js",
    "lib": "underscore",
    "func": ""
  },
  {
    "link": "kim007#bind",
    "language": "js",
    "lib": "underscore",
    "func": "_.bind(function, object, [*arguments])"
  },
  {
    "link": "http://underscorejs.org/#bindAll",
    "language": "js",
    "lib": "underscore",
    "func": "_.bindAll(object, [*methodNames])"
  },
  {
    "link": "http://underscorejs.org/#partial",
    "language": "js",
    "lib": "underscore",
    "func": "_.partial(function, [*arguments])"
  },
  {
    "link": "http://underscorejs.org/#memoize",
    "language": "js",
    "lib": "underscore",
    "func": "_.memoize(function, [hashFunction])"
  },
  {
    "link": "http://underscorejs.org/#delay",
    "language": "js",
    "lib": "underscore",
    "func": "_.delay(function, wait, [*arguments])"
  },
  {
    "link": "http://underscorejs.org/#defer",
    "language": "js",
    "lib": "underscore",
    "func": "_.defer(function, [*arguments])"
  },
  {
    "link": "http://underscorejs.org/#throttle",
    "language": "js",
    "lib": "underscore",
    "func": "_.throttle(function, wait)"
  },
  {
    "link": "http://underscorejs.org/#debounce",
    "language": "js",
    "lib": "underscore",
    "func": "_.debounce(function, wait, [immediate])"
  },
  {
    "link": "http://underscorejs.org/#once",
    "language": "js",
    "lib": "underscore",
    "func": "_.once(function)"
  },
  {
    "link": "http://underscorejs.org/#after",
    "language": "js",
    "lib": "underscore",
    "func": "_.after(count, function)"
  },
  {
    "link": "http://underscorejs.org/#wrap",
    "language": "js",
    "lib": "underscore",
    "func": "_.wrap(function, wrapper)"
  },
  {
    "link": "http://underscorejs.org/#compose",
    "language": "js",
    "lib": "underscore",
    "func": "_.compose(*functions)"
  },
  {
    "link": "http://underscorejs.org/#objects",
    "language": "js",
    "lib": "underscore",
    "func": ""
  },
  {
    "link": "http://underscorejs.org/#keys",
    "language": "js",
    "lib": "underscore",
    "func": "_.keys(object)"
  },
  {
    "link": "http://underscorejs.org/#values",
    "language": "js",
    "lib": "underscore",
    "func": "_.values(object)"
  },
  {
    "link": "http://underscorejs.org/#pairs",
    "language": "js",
    "lib": "underscore",
    "func": "_.pairs(object)"
  },
  {
    "link": "http://underscorejs.org/#invert",
    "language": "js",
    "lib": "underscore",
    "func": "_.invert(object)"
  },
  {
    "link": "http://underscorejs.org/#object-functions",
    "language": "js",
    "lib": "underscore",
    "func": "_.functions(object)"
  },
  {
    "link": "http://underscorejs.org/#extend",
    "language": "js",
    "lib": "underscore",
    "func": "_.extend(destination, *sources)"
  },
  {
    "link": "http://underscorejs.org/#pick",
    "language": "js",
    "lib": "underscore",
    "func": "_.pick(object, *keys)"
  },
  {
    "link": "http://underscorejs.org/#omit",
    "language": "js",
    "lib": "underscore",
    "func": "_.omit(object, *keys)"
  },
  {
    "link": "http://underscorejs.org/#defaults",
    "language": "js",
    "lib": "underscore",
    "func": "_.defaults(object, *defaults)"
  },
  {
    "link": "http://underscorejs.org/#clone",
    "language": "js",
    "lib": "underscore",
    "func": "_.clone(object)"
  },
  {
    "link": "http://underscorejs.org/#tap",
    "language": "js",
    "lib": "underscore",
    "func": "_.tap(object, interceptor)"
  },
  {
    "link": "http://underscorejs.org/#has",
    "language": "js",
    "lib": "underscore",
    "func": "_.has(object, key)"
  },
  {
    "link": "http://underscorejs.org/#isEqual",
    "language": "js",
    "lib": "underscore",
    "func": "_.isEqual(object, other)"
  },
  {
    "link": "http://underscorejs.org/#isEmpty",
    "language": "js",
    "lib": "underscore",
    "func": "_.isEmpty(object)"
  },
  {
    "link": "http://underscorejs.org/#isElement",
    "language": "js",
    "lib": "underscore",
    "func": "_.isElement(object)"
  },
  {
    "link": "http://underscorejs.org/#isArray",
    "language": "js",
    "lib": "underscore",
    "func": "_.isArray(object)"
  },
  {
    "link": "http://underscorejs.org/#isObject",
    "language": "js",
    "lib": "underscore",
    "func": "_.isObject(value)"
  },
  {
    "link": "http://underscorejs.org/#isArguments",
    "language": "js",
    "lib": "underscore",
    "func": "_.isArguments(object)"
  },
  {
    "link": "http://underscorejs.org/#isFunction",
    "language": "js",
    "lib": "underscore",
    "func": "_.isFunction(object)"
  },
  {
    "link": "http://underscorejs.org/#isString",
    "language": "js",
    "lib": "underscore",
    "func": "_.isString(object)"
  },
  {
    "link": "http://underscorejs.org/#isNumber",
    "language": "js",
    "lib": "underscore",
    "func": "_.isNumber(object)"
  },
  {
    "link": "http://underscorejs.org/#isFinite",
    "language": "js",
    "lib": "underscore",
    "func": "_.isFinite(object)"
  },
  {
    "link": "http://underscorejs.org/#isBoolean",
    "language": "js",
    "lib": "underscore",
    "func": "_.isBoolean(object)"
  },
  {
    "link": "http://underscorejs.org/#isDate",
    "language": "js",
    "lib": "underscore",
    "func": "_.isDate(object)"
  },
  {
    "link": "http://underscorejs.org/#isRegExp",
    "language": "js",
    "lib": "underscore",
    "func": "_.isRegExp(object)"
  },
  {
    "link": "http://underscorejs.org/#isNaN",
    "language": "js",
    "lib": "underscore",
    "func": "_.isNaN(object)"
  },
  {
    "link": "http://underscorejs.org/#isNull",
    "language": "js",
    "lib": "underscore",
    "func": "_.isNull(object)"
  },
  {
    "link": "http://underscorejs.org/#isUndefined",
    "language": "js",
    "lib": "underscore",
    "func": "_.isUndefined(value)"
  },
  {
    "link": "http://underscorejs.org/#utility",
    "language": "js",
    "lib": "underscore",
    "func": ""
  },
  {
    "link": "http://underscorejs.org/#noConflict",
    "language": "js",
    "lib": "underscore",
    "func": "_.noConflict()"
  },
  {
    "link": "http://underscorejs.org/#identity",
    "language": "js",
    "lib": "underscore",
    "func": "_.identity(value)"
  },
  {
    "link": "http://underscorejs.org/#times",
    "language": "js",
    "lib": "underscore",
    "func": "_.times(n, iterator, [context])"
  },
  {
    "link": "http://underscorejs.org/#random",
    "language": "js",
    "lib": "underscore",
    "func": "_.random(min, max)"
  },
  {
    "link": "http://underscorejs.org/#mixin",
    "language": "js",
    "lib": "underscore",
    "func": "_.mixin(object)"
  },
  {
    "link": "http://underscorejs.org/#uniqueId",
    "language": "js",
    "lib": "underscore",
    "func": "_.uniqueId([prefix])"
  },
  {
    "link": "http://underscorejs.org/#escape",
    "language": "js",
    "lib": "underscore",
    "func": "_.escape(string)"
  },
  {
    "link": "http://underscorejs.org/#unescape",
    "language": "js",
    "lib": "underscore",
    "func": "_.unescape(string)"
  },
  {
    "link": "http://underscorejs.org/#result",
    "language": "js",
    "lib": "underscore",
    "func": "_.result(object, property)"
  },
  {
    "link": "http://underscorejs.org/#template",
    "language": "js",
    "lib": "underscore",
    "func": "_.template(templateString, [data], [settings])"
  },
  {
    "link": "http://underscorejs.org/#chaining",
    "language": "js",
    "lib": "underscore",
    "func": ""
  },
  {
    "link": "http://underscorejs.org/#chain",
    "language": "js",
    "lib": "underscore",
    "func": "_.chain(obj)"
  },
  {
    "link": "http://underscorejs.org/#value",
    "language": "js",
    "lib": "underscore",
    "func": "_(obj).value()"
  }
];


var idx = lunr(function () {
    this.field('func', { boost: 10 })
})


var hasher = function (ref_unit) {
   return md5(ref_unit.lib + ref_unit.func);
};

var db_length = db.length;
i = 0;


while (i < db_length) {
  var ref_unit = db[i];

  // ref_unit.id = hasher(ref_unit);

  ref_unit.id = i;

  i++
}

var db_length = db.length;
i = 0;

while (i < db_length) {
    console.log("worked");
    idx.add(db[i])
    i++
}

// var doc = {
//     "title": "Twelfth-Night",
//     "body": "If music be the food of love, play on: Give me excess of it…",
//     "author": "William Shakespeare",
//     "id": 1
// }
// idx.add(doc)

// var spoc = {
//     "title": "Twelfth-Night",
//     "body": "Love all, trust a few, do wrong to none.",lunr
//     "author": "William Shakespeare",
//     "id": 2
// }
// idx.add(spoc)

// var froc = {
//     "title": "elf-Night",
//     "body": "As soon go kindle fire with snow, as seek to quench the fire of love with words.",
//     "author": "William Shakespeare",
//     "id": 3
// }
// idx.add(froc)

//Live Search
//Reacts to keyup in the input and waits for a certain amount of time before
//calling searc func

var typewatch = function(){
        var timer = 0;
        return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
        }
}();

//Get results for query
//Get array of corresponding documents
//Render template with document array

var searchRender = function(results) {
  var results_length = results.length;
  var results_arr = [];
  i = 0;


  while (i < results_length) {
    var rel = results[i].score
    var ref = results[i].ref;
    results_arr.push(db[ref])
    i++
  }

  var result_fn = doT.template(document.getElementById('result_tmpl').text)
  document.getElementById('results-list').innerHTML = result_fn(results_arr);
}

window.onload = function () {
  document.getElementById('box').onkeyup = function () {
    typewatch(function(){
      searchRender(idx.search(document.getElementById('box').value))},
      200)
    }
};


//BACKBONE DOC SCRAPER
// var url = "http://backbonejs.org/";
// var array = []

// $("[id]").each(function() {
//   var obj = {};
//   var id = ($(this).attr("id"));
//   var code = $(this).find("code").text();
//   console.log(id);
//   console.log(code);
//   obj.link = url + "#" + id;
//   obj.language = "js";
//   obj.lib = "backbone";
//   obj.func = code;
//   array.push(obj)
// });

// console.log(JSON.stringify(array));


// UNDERSCORE DOC SCRAPER
// var url = "http://underscorejs.org/";
// var array = []

// $("[id]").each(function() {
//   var obj = {};
//   var id = ($(this).attr("id"));
//   var code = $(this).find("code").text();
//   console.log(id);
//   console.log(code);
//   obj.link = url + "#" + id;
//   obj.language = "js";
//   obj.lib = "underscore";
//   obj.func = code;
//   array.push(obj)
// });

// console.log(JSON.stringify(array));
