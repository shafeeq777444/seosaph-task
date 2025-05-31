

// add task
export const addController = async (req, res) => {
  try {
    console.log(req.body)
    const { title, description } = req.body;

    const result = await prisma.task.create({
      data: {
        title,
        description,
        // `date` will be automatically set to current time by Prisma
      },
    });

    res.status(200).send({ result });
  } catch (error) {
    console.error("Error in addController:", error.message);
    res.status(500).send({ error: "Failed to create task" });
  }
};
// getTask
import prisma from '../config/prismaClient.js'; // make sure path is correct

export const getController = async (req, res) => {
  try {
    const result = await prisma.task.findMany(); // Prisma equivalent of Task.find()
    res.status(200).send({ result });
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    res.status(500).send({ error: "Failed to fetch tasks" });
  }
};

