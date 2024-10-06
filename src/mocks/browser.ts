// msw는 next.js에서 next서버(백그라운드)에서도 동작해야하고 브라우저에서도 동작해야함

// msw 1.0 -> 2.0에서 setupWorker를 msw/browser로 변경해야함
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);

export default worker;
