package org.lu.df.formula1.solver;

import org.lu.df.formula1.domain.Stage;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.constraint.ConstraintMatch;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Setter
@Getter
public class SimpleIndictmentObject {
    private String indictedObjectID;
    private HardSoftScore score;
    private int matchCount;
    private List<SimpleConstraintMatch> constraintMatches;

    public SimpleIndictmentObject(
            Object indictedObject,
            HardSoftScore score,
            int matchCount,
            Set<ConstraintMatch<HardSoftScore>> constraintMatches
    ) {
        this.indictedObjectID = ((Stage) indictedObject).getName();
        this.score = score;
        this.matchCount = matchCount;
        this.constraintMatches = constraintMatches.stream().map(
                SimpleConstraintMatch::new
        ).collect(Collectors.toList());
    }
}
