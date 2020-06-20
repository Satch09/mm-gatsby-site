exports.page = {
  headerProps: {
    title: `Training`,
    description: ``,
  },
  heading: {
    title: `training`,
    body: [
      `We provide customer-specific training which ensures that those delegates attending our courses are trained according to the systems they work on. Please contact us should you wish to find out more about any of our proudly offered courses`,
    ],
  },
  courses: [
    {
      name: `PLC Basic`,
      description: `This 3 day course gives a basic introduction into the concepts behind PLC theory`,
      objectives: [
        `What the PLC is and what it is used for`,
        `Digital and Analogue theory`,
        `Control Circuits`,
        `Digital Inputs and Outputs`,
        `Analogue Inputs and Outputs`,
        `Ladder Logic Basics`,
        `Practical Wiring and Programming`,
        `Discussion of PLC related topic`,
      ],
      requirements: [`Basic computer skills`],
    },
    {
      name: `PLC Advanced`,
      description: `This 3 day course gives advanced practical programming training of PLCs`,
      objectives: [
        `Programming principles`,
        `Functional Specifications`,
        `Design and Code of Software`,
        `Documentation`,
        `The standard Stop/Start circuit with interlocks`,
        `Programming of Complete Machine`,
      ],
      requirements: [`PLC Basic`],
    },
    {
      name: `Drive Basic`,
      description: `This 1 day course gives advanced insight into the parameters of Variable Frequency Drives`,
      objectives: [
        `Recap of principals of AC drives`,
        `Practical applications`,
        `Power components`,
        `Control components`,
        `Drive programming`,
        `Drive start up`,
        `Practical work and discussion`,
      ],
      requirements: [`Drive Installation and Practice 1`],
    },
    {
      name: `Troubleshooting`,
      description: `This 1 day course gives a Basic Introduction to Fault Finding`,
      objectives: [
        `Fault finding basics`,
        `Troubleshooting Theory`,
        `The 5 step method`,
        `Troubleshooting Practical`,
        `The standard stop/start circuit with interlocks`,
      ],
      requirements: [`Basic electrical`],
    },
    {
      name: `Automation Control Systems 1`,
      description: `This 1 day course gives a basic introduction to Control Systems`,
      objectives: [
        `The concept of process control`,
        `Field Instruments`,
        `Process Variables and Control Variables`,
        `Digital and Analog Controllable Processes`,
        `Digital and Analog Measurable Processes`,
        `Control Loop and Application`,
        `Introduction to PID`,
        `Discussion of Automation related topics`,
      ],
      requirements: [`Basic electrical`],
    },
  ],
};
