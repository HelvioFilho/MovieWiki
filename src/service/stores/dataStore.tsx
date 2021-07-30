import create from 'zustand';
import { DataProps, DataItemProps } from '../../utils/interface';

interface ZustandProps extends DataProps {
  setData: (data: DataItemProps) => void;
}

export const useDataStore = create<ZustandProps>((set) => ({
  data: {} as DataItemProps,
  setData: (data) => set({ data }),
}));
