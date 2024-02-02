import {
  $,
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./index@empty.scss?inline";

export default component$(() => {
  const eachSide = 3;
  const listLength = useSignal(1 + 2 * eachSide);
  const total = useSignal(0);
  const list = useSignal<number[]>([]);
  const current = useSignal(-1);
  const refContainer = useSignal<HTMLDivElement>();
  const inTimeoutScroll = useSignal(false);
  const hideContainer = useSignal(true);
  const timeoutScroll = useSignal<any>(null);

  useStylesScoped$(styles);

  const getBounary = $((current: number) => {
    const list = listLength.value;
    const half = Math.ceil(list / 2);
    let min = current - half > 0 ? current - half : 0;
    const max = min + list - 1 > total.value ? total.value : min + list - 1;

    min = max - (list - 1);

    const output = [];
    for (let index = min; index <= max; index++) {
      output.push(index);
    }

    console.log(min, max);

    return output;
  });

  const setCurrent = $(async (value: number) => {
    if (value < 0 || value > total.value) {
      return;
    }
    current.value = value;
    const boundary = await getBounary(value);
    if (boundary.join("-") !== list.value.join("-")) {
      list.value = boundary;
    }
  });

  const swipeNext = $(async () => {
    setCurrent(current.value + 1);
  });

  const swipeTo = $(async (position: number) => {
    setCurrent(position);
  });

  const swipePrev = $(async () => {
    setCurrent(current.value - 1);
  });

  useVisibleTask$(async () => {
    total.value = 30;
    setCurrent((listLength.value - 1) / 2);

    hideContainer.value = false;
    console.log("useVisibleTask", hideContainer.value);

    const $container = refContainer.value;
    if ($container) {
      $container.addEventListener("wheel", (event) => {
        inTimeoutScroll.value = true;
        if (timeoutScroll.value) {
          clearTimeout(timeoutScroll.value);
        }
        timeoutScroll.value = setTimeout(() => {
          inTimeoutScroll.value = false;
        }, 300);
        const scrollDown = event.deltaY > 0;
        if (scrollDown) {
          swipeNext();
        } else {
          swipePrev();
        }
      });

      let origin = 0;
      let pageX = 0;
      let pageXTime = 0;
      let timeout: any = null;
      let interval: any = null;
      const halfX = window.innerWidth / 2;

      const calc = (touch1: Touch) => {
        const now = Date.now();
        const diffOrigin = touch1.pageX - origin;
        const diffPageX = touch1.pageX - pageX;
        const diffPageXTime = now - pageXTime;

        console.log(diffPageX, diffOrigin, diffPageXTime, halfX);
        if (diffPageXTime < 100) {
          return;
        }

        pageX = touch1.pageX;
        pageXTime = now;

        if (interval) {
          clearInterval(interval);
          interval = null;
        }

        if (diffOrigin > 0) {
          swipeNext();

          interval = setInterval(() => {
            swipeNext();
          }, 100);
        } else if (diffOrigin < 0) {
          swipePrev();

          interval = setInterval(() => {
            swipePrev();
          }, 100);
        }
      };

      const touchStart = (event: TouchEvent) => {
        const target = event.target;
        if (!target) {
          return;
        }
        event.preventDefault();

        const touch1 = event.touches[0];
        if (touch1) {
          origin = touch1.pageX;
        }

        const touchMove = (event: any) => {
          event.preventDefault();
          const touch1 = event.touches[0];
          if (touch1) {
            calc(touch1);
          }
        };

        const touchEnd = () => {
          origin = 0;
          pageX = 0;
          pageXTime = 0;
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }

          target.removeEventListener("touchmove", touchMove);
          target.removeEventListener("touchend", touchEnd);
        };

        target.addEventListener("touchmove", touchMove);
        target.addEventListener("touchend", touchEnd);
      };

      $container.addEventListener("touchstart", touchStart);
    }
  });

  return (
    <div>
      <div
        data-hide={hideContainer}
        class={[
          "wrapper",
          { hide: hideContainer.value, scroll: inTimeoutScroll.value },
        ]}
        ref={refContainer}
      >
        <div class="w-full h-full relative">
          <div class="list">
            {list.value.map((index) => {
              const position = index;
              return (
                <div
                  draggable={false}
                  key={position}
                  class={["card", { current: current.value === position }]}
                  data-position={position}
                  style={{
                    "--i": position,
                    "--c": current.value,
                    "--m": listLength.value,
                    "--n": eachSide,
                  }}
                  onClick$={() => swipeTo(position)}
                >
                  <span>{position}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
