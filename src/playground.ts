import { z } from "zod";
import { createMessageProtocol } from "./createMessageProtocol";

// { type : 'LOG_IN'; username: string; password: string } | { type: 'LOG_OUT'}

const messageBus = createMessageProtocol({
  events: {
    LOG_IN: {
      username: z.string(),
      password: z.string(),
    },
    LOG_OUT: {},
  },
});

const handler = messageBus.createHandler((event) => {});
