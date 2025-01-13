const express = require('express');
const router = express.Router();

const { TOPIC_NAME } = require('../../config/kafka/constants');
const kafka = require('../../config/kafka/config');

module.exports = args => {
  const producer = kafka.producer()

  router.post('/send', async (req, res) => {
    try {
      const { message } = req.body;
      const messages = [{ key: "key1", value: message }];

      try {
        await producer.connect();
        await producer.send({
          topic: TOPIC_NAME,
          messages: messages,
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
