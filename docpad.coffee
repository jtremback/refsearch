# Define the Configuration
docpadConfig = {
  templateData:
    site:
      title: "API doc search"

    getPreparedTitle: (input) -> if @document.title then "#{@document.title} #{input} #{@site.title}" else "#{@site.title} #{input}"

    # gets all pages in a certain category passed in
    getPages: (category) ->
      @getCollection("html").findAllLive({category: category})

    db: require("./db.json")

}

# Export the Configuration
module.exports = docpadConfig