const kafka = require('kafka-node');
const { TOPIC_NAME, BROKERS } = require('./constants');

const consumer = new kafka.Consumer(
  new kafka.KafkaClient({ kafkaHost: BROKERS }),
  [{ topic: TOPIC_NAME }]
);

consumer.on('message', function (message) {
  console.log(message.value);
});
