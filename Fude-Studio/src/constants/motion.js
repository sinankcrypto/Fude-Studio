export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
    ease: EASE,
  },
};


export const fadeIn = {
  initial: {
    opacity: 0,
  },

  whileInView: {
    opacity: 1,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
    ease: EASE,
  },
};


export const imageReveal = {
  initial: {
    opacity: 0,
    scale: 1.05,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.8,
    ease: EASE,
  },
};


export const hoverImage = {
  scale: 1.04,
  transition: {
    duration: 0.6,
    ease: EASE,
  },
};