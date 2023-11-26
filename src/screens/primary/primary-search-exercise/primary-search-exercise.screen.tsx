import { ModalHeader } from '@/atoms';
import { BasicLayout } from '@/layouts';

export const PrimarySearchExerciseScreen = () => {
  return (
    <BasicLayout>
      <ModalHeader
        left={{
          type: 'icon-string',
          iconName: 'search-off',
          title: '운동 찾기',
        }}
      />
    </BasicLayout>
  );
};
