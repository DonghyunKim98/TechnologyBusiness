import { ModalHeader } from '@/atoms';
import { BasicLayout } from '@/layouts';

export const PrimaryExerciseScheduleScreen = () => {
  return (
    <BasicLayout>
      <ModalHeader
        left={{
          type: 'icon-string',
          iconName: 'calendar-month',
          title: '운동 일정',
        }}
      />
    </BasicLayout>
  );
};
