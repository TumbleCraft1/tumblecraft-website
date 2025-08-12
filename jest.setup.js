import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileHover, whileTap, initial, animate, transition, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, whileHover, whileTap, initial, animate, transition, ...props }) => <button {...props}>{children}</button>,
    tr: ({ children, whileHover, whileTap, initial, animate, transition, ...props }) => <tr {...props}>{children}</tr>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}))

// Mock Next.js image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
}))

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}))