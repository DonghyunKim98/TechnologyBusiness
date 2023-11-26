import { ModalHeader } from '@/atoms';
import { BasicLayout } from '@/layouts';

export const PrimaryExerciseScheduleScreen = () => {
  return (
    <BasicLayout>
      <ModalHeader left={{ type: 'string', title: '운동 일정' }} />
    </BasicLayout>
  );
};
