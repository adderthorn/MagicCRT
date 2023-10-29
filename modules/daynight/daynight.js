Module.register("daynight", {
    defaults: {
        evening_start: 18,
        evening_stop: 6
    },

    start: function() {
        Log.info(`Starting Module: ${this.name}`)

        var self = this
        self.updateStylesheet()
        setInterval(function() {
            self.updateStylesheet()
        }, 600000)
    },

    updateStylesheet: function() {
        var now = new Date().getHours()
		Log.info(`It is ${now} hours.`)
        var body = document.querySelector("evening")
        if (now < this.config.evening_start && now >= this.config.evening_stop) {
            // morning
            document.body.className = "morning"
        } else {
            // evening
            document.body.className = "evening"
        }
    }
})
