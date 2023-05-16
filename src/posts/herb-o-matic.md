After years of inadvertently killing my basil plants, I came to the realization that the key to their survival was removing the one failing factor: me. That's why, with the help of a friend, I created the Herb-O-Matic. This is an automatic irrigation system designed to measure soil moisture and water the herbs if needed. Now, the only thing I need to worry about is refilling the water reservoir.

![Herb-O-Matic 1](/images/posts/herb-o-matic1.jpg)

The Herb-O-Matic also publishes data to my server, which runs [Home Assistant](https://www.home-assistant.io/). This data is transmitted using the [MQTT protocol](https://mqtt.org/). On my Home Assistant dashboard, I visualize the current soil moisture level and the last time the plants were watered.

For this irrigation system, I used a Wemos D1 mini, a small microcontroller capable of connecting to WiFi. I programmed the controller to wake up every hour and measure the soil moisture. When the soil is too dry, the microcontroller activates the pump, allowing water to flow through the perforated tubing.  
The Herb-O-Matic gets its power from the grid. And I'm happy to announce that it didn't catch fire yet!

![Herb-O-Matic 2](/images/posts/herb-o-matic2.jpg)

There are two upgrades I plan to implement in the short term. Firstly, I want Home Assistant to send me a push notification when the water reservoir is nearly empty. Secondly, I want to make a laser-cut wooden casing to conceal the ugly plastic planter and all the electronics.

Another potential upgrade would be to measure the nutrients in the soil. Then, when the nutrients are running low, you could just add the nutrients to the water reservoir. In fact, the Herb-O-Matic should handle that task itself.
