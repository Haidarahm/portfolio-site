import { TextEffect } from './motion-primitives/text-effect';

export function AboutText() {
  return (
    <TextEffect per='char' preset='fade'>
      Animate your ideas with motion-primitives
    </TextEffect>
  );
}