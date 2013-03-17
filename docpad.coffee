# Define the Configuration
outPath: '.'

docpadConfig = {
	templateData:
		site:
			title: "API doc search"

		getPreparedTitle: (input) -> if @document.title then "#{@document.title} #{input} #{@site.title}" else "#{@site.title} #{input}"

		# gets all pages in a certain category passed in
		getPages: (category) ->
			@getCollection("html").findAllLive({category: category})

		db: require("./db.json")

		environments:
		  root: [
		    regex: /^\s*(.+)(\..*)$/ #Object Base
		    type: "object_base"
		    next_env: "root"
		  ,
		    regex: /^\s*(\..+)(\..*)$/ #Property
		    type: "property"
		    next_env: "root"
		  ,
		    regex: /^\s*([^\.]+\()(.*)$/ #Function Call
		    type: "func_call"
		    next_env: "args"
		  ,
		    regex: /^\s*(\..+\()(.*)$/ #Method
		    type: "method"
		    next_env: "args"
		  ]

		  args: [
		    regex: /^\s*(\[[^,\)]+\],?)(.*)$/ #Optional Argument
		    type: "opt_arg"
		    next_env: "args"
		  ,
		    regex: /^(\s*[^\[,\)]+,?)(.*)$/ #Required Argument
		    type: "req_arg"
		    next_env: "args"
		  ,
		    regex: /^\s*(\))(.*)$/ #Exit args
		    type: "close_paren"
		    next_env: "out"
		  ]

		colorize: (init_string, init_env, environments) ->
			results_arr = []
			outside = undefined
			inner = (string, env) ->
				env_data = environments[env]
				env_length = env_data.length
				i = 0

				while i < env_length
					test_obj = env_data[i]

					if test_obj.regex.test(string)
						result = test_obj.regex.exec(string)
						next_env = test_obj.next_env
						results_arr.push
							text: result[1]
							type: test_obj.type
							env: test_obj.env

						if env isnt next_env
							outside = next_env  if next_env isnt "out"
							next_env = outside  if next_env is "out"

						inner result[2], next_env
						break
					i++

			inner init_string, init_env
			results_arr

		runner: (db) ->
			db_length = db.length
			i = 0
			newdb = []
			while i < db_length
				ref_unit = db[i]
				ref_unit.split_func = @colorize(ref_unit.func, "root", @environments)
				i++
			db

}

# Export the Configuration
module.exports = docpadConfig



#JSON RUNNER
#Iterate through db.json, read func property.
#Run string in func property through colorizer.
#Save array in split_func property