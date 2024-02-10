package com.example.purrfectpet;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

//public class PetAdapter extends RecyclerView.Adapter<PetAdapter.PetViewHolder> {
//    private List<Pet> petList;
//
//    public PetAdapter(List<Pet> petList) {
//        this.petList = petList;
//    }
//
//    @NonNull
//    @Override
//    public PetViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
//        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.card_pet, parent, false);
//        return new PetViewHolder(view);
//    }
//
//    @Override
//    public void onBindViewHolder(@NonNull PetViewHolder holder, int position) {
//        Pet pet = petList.get(position);
//
//        holder.textViewName.setText(pet.getName());
//        holder.textViewType.setText(pet.getType());
//        holder.textViewBreed.setText(pet.getBreed());
//        // Load image using your preferred image loading library (Glide, Picasso, etc.)
//        // Example:
//        // Glide.with(holder.imageViewPet.getContext()).load(pet.getImageUrl()).into(holder.imageViewPet);
//    }
//
//    @Override
//    public int getItemCount() {
//        return petList.size();
//    }
//
//    static class PetViewHolder extends RecyclerView.ViewHolder {
//        ImageView imageViewPet;
//        TextView textViewName, textViewType, textViewBreed;
//
//        public PetViewHolder(@NonNull View itemView) {
//            super(itemView);
//            imageViewPet = itemView.findViewById(R.id.imageViewPet);
//            textViewName = itemView.findViewById(R.id.textViewName);
//            textViewType = itemView.findViewById(R.id.textViewType);
//            textViewBreed = itemView.findViewById(R.id.textViewBreed);
//        }
//    }
//}

public class PetAdapter extends RecyclerView.Adapter<PetAdapter.PetViewHolder> {

    private List<Pet> petList;
    private OnItemClickListener listener;

    public interface OnItemClickListener {
        void onItemClick(Pet pet);
    }

    public PetAdapter(List<Pet> petList, OnItemClickListener listener) {
        this.petList = petList;
        this.listener = listener;
    }

    @NonNull
    @Override
    public PetViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.card_pet, parent, false);
        return new PetViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull PetViewHolder holder, int position) {
        Pet pet = petList.get(position);
        holder.bind(pet, listener);
    }

    @Override
    public int getItemCount() {
        return petList.size();
    }

    public static class PetViewHolder extends RecyclerView.ViewHolder {
        private TextView textViewName;
        private TextView textViewType;
        private TextView textViewBreed;
        private ImageView imageViewPet;

        public PetViewHolder(@NonNull View itemView) {
            super(itemView);
            textViewName = itemView.findViewById(R.id.textViewName);
            textViewType = itemView.findViewById(R.id.textViewType);
            textViewBreed = itemView.findViewById(R.id.textViewBreed);
            imageViewPet = itemView.findViewById(R.id.imageViewPet);
        }

        public void bind(final Pet pet, final OnItemClickListener listener) {
            textViewName.setText(pet.getName());
            textViewType.setText(pet.getType());
            textViewBreed.setText(pet.getBreed());
//            Picasso.get().load(pet.getImageUrl()).into(imageViewPet);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    listener.onItemClick(pet);
                }
            });
        }
    }
}
