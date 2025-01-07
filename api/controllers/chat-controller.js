import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIds: {
          hasSome: [tokenUserId],
        },
      },
    });

    for (const chat of chats) {
      const receiver = chat.userIds.find((id) => id !== tokenUserId);
      if (receiver) {
        const user = await prisma.user.findUnique({
          where: {
            id: receiver,
          },
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        });
        chat.receiver = user;
      }
    }

    res.status(200).json(chats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error : ${error.message}` });
  }
};

export const getChat = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: req.params.id,
        userIds: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        Messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    await prisma.chat.update({
      where: {
        id: req.params.id,
      },
      data: {
        seenBy: {
          push: [tokenUserId],
        },
      },
    }),
      res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error : ${error.message}` });
  }
};

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const newChat = await prisma.chat.create({
      data: {
        userIds: [tokenUserId, req.body.receiverId],
      },
    });
    res.status(200).json(newChat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error : ${error.message}` });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIds: {
          hasSome: [tokenUserId],
        },
        data: {
          seenBy: {
            push: [tokenUserId],
          },
        },
      },
    });
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error : ${error.message}` });
  }
};
