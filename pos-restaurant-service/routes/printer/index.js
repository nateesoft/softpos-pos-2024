const express = require('express');
const router = express.Router();

const { TOPIC_NAME } = require('../../config/kafka/constants');
const kafka = require('../../config/kafka/config');

module.exports = args => {
  const producer = kafka.producer()
  const adminKafka = kafka.admin()

  router.post('/createTopic', async (req, res) => {
    const { topicName = TOPIC_NAME } = req.body
    try {
      await adminKafka.connect();
      // const listTopics = await adminKafka.listTopics()
      // console.log(listTopics)
      await adminKafka.createTopics({
        timeout: 3000,
        topics: [{ topic: topicName,numPartitions: 1 }]
      });
    } catch (error) {
      console.error(error);
    } finally {
      await adminKafka.disconnect();
    }

    res.status(200).json({
      status: "Ok!",
      message: `Create topic ${topicName} success.`,
    });
  })

  router.post('/send', async (req, res) => {
    try {
      const { message, topicName = TOPIC_NAME } = req.body;
      const messages = [{ key: "key1", value: message }];

      try {
        await producer.connect();
        await producer.send({
          topic: topicName,
          messages: messages,
          partition: 0
        });
      } catch (error) {
        console.error(error);
      } finally {
        await producer.disconnect();
      }

      res.status(200).json({
        status: "Ok!",
        message: "Message successfully send!",
      });
    } catch (error) {
      console.log(error);
    }
  });

  return router

}
