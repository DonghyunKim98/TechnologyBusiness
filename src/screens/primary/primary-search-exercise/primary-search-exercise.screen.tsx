import { ModalHeader } from '@/atoms';
import { BasicLayout } from '@/layouts';

export const PrimarySearchExerciseScreen = () => {
  return (
    <BasicLayout>
      <ModalHeader left={{ type: 'string', title: '운동 찾기' }} />
    </BasicLayout>
  );
};
