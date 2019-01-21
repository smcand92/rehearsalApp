package com.codeclan.example.rehearsalschedule.models;

import com.codeclan.example.rehearsalschedule.RehearsalscheduleApplication;
import org.hibernate.annotations.Cascade;
import sun.swing.BakedArrayList;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private Date startTime;

    @Column
    private Date endTime;

    @Column
    private String name;

    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name="members_tasks",
            joinColumns = {@JoinColumn(
                    name="member_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = {@JoinColumn(
                    name="task_id",
                    nullable = false,
                    updatable = false)}

    )
    private List<Member> members;

    @Column
    private Rehearsal rehearsal;

    public Task(Date startTime, Date endTime, String name) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.members = new ArrayList();
        this.rehearsal = rehearsal;
    }

    public Task(){}

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Member> getMembers() {
        return members;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }

    public Rehearsal getRehearsal() {
        return rehearsal;
    }

    public void setRehearsal(Rehearsal rehearsal) {
        this.rehearsal = rehearsal;
    }

    public void addMembers(Member member){
        this.members.add(member);
    }

}