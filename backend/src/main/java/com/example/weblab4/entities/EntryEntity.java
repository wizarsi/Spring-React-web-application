package com.example.weblab4.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name="entries")

public class EntryEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @JsonIgnore
        private Long id;
        @ManyToOne
        @JoinColumn(name = "user_id")
        @JsonIgnore
        private UserEntity userEntity;


        private float x;
        private float y;
        private float r;
        @Column(name="isEntry")
        private boolean isEntry = false;
        private Date dateTime;

        public EntryEntity(float x, float y, float r, boolean isEntry, Date dateTime) {
                this.x = x;
                this.y = y;
                this.r = r;
                this.isEntry = isEntry;
                this.dateTime = dateTime;
        }

        public EntryEntity() {

        }

        @Override
        public String toString() {
                return "EntryEntity{" +
                        "id=" + id +
                        ", x=" + x +
                        ", y=" + y +
                        ", r=" + r +
                        ", isEntry=" + isEntry +
                        '}';
        }
}
